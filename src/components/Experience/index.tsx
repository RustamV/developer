import { SectionTitle, Timeline } from "..";
import { LaptopOutlined } from "@ant-design/icons";

const Experience: React.FC = () => {
    const jobs = [
        {
            id: 0,
            title: "Drakkar",
            subtitle: "Frontend-разработчик",
            date: "Сентябрь 2020 - н.в.",
            duties: [
                "Верстка лэндинга на NextJS",
                "Разработка SPA-личного кабинета",
                "Участие в разработке внутреннего UI-kit'а",
                "Поддержка существующих проектов"
            ]
        },
        {
            id: 1,
            title: "People Plans",
            subtitle: "HTML-верстальщик",
            date: "Май 2019 - Июнь 2019",
            duties: ["Верстка лэндингов"]
        },
        {
            id: 2,
            title: "Амбити",
            subtitle: "HTML-верстальщик",
            date: "Октябрь 2018 - Март 2019",
            duties: ["Верстка лэндингов", "Поддержка существующих проектов"]
        }
    ];

    return (
        <div>
            <SectionTitle title="Опыт работы" icon={<LaptopOutlined />} />
            {jobs.map((job) => (
                <Timeline date={job.date} title={job.title} subtitle={job.subtitle} data={job.duties} />
            ))}
        </div>
    );
};

export default Experience;
