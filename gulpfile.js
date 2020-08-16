'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const sync = require('browser-sync');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/styles'));
});


// HTML

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('docs'))
        .pipe(sync.stream());
});

// Styles

gulp.task('styles', function() {
    return gulp.src('dist/styles/index.css')
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-media-minmax'),
            require('autoprefixer'),
            require('postcss-csso')
        ]))
        .pipe(replace(/\.\.\//g, ''))
        .pipe(gulp.dest('docs/styles'))
        .pipe(sync.stream());
});

// Scripts

gulp.task('scripts', function() {
    return gulp.src('src/scripts/index.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(terser())
        .pipe(gulp.dest('docs'))
        .pipe(sync.stream());
});

// Copy

gulp.task('copy', function() {
    return gulp.src([
            'src/fonts/*',
            'src/images/*',
            'src/images/**/*'
        ], {
            base: 'src'
        })
        .pipe(gulp.dest('docs'))
        .pipe(sync.stream({
            once: true
        }));
});

// Paths

gulp.task('paths', function() {
    return gulp.src('docs/*.html')
        .pipe(replace(
            /(<link rel="stylesheet" href=")styles\/(index.css">)/, '$1$2'
        ))
        .pipe(replace(
            /(<script src=")scripts\/(index.js">)/, '$1$2'
        ))
        .pipe(gulp.dest('docs'));
});

// Server

gulp.task('server', function() {
    sync.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'docs'
        }
    });
});

// Watch

gulp.task('watch', function() {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch(['src/styles/*.scss', 'src/styles/**/*.scss'], gulp.series('sass', 'styles'));
    gulp.watch('src/scripts/**/*.js', gulp.series('scripts'));
    gulp.watch([
        'src/fonts/*',
        'src/images/*',
        'src/images/**/*'
    ], gulp.series('copy'));
});

// Default

gulp.task('default', gulp.series(
    'sass',
    gulp.parallel(
        'html',
        'styles',
        // 'scripts',
        'copy'
    ),
    // 'paths',
    gulp.parallel(
        'watch',
        'server'
    )
));