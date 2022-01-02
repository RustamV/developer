import { Row, Col } from "antd";
import { Contacts, Education, Experience, Profile, Skills } from "../../components";
import styles from "./index.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Row gutter={30}>
                <Col xs={16}>
                    <Profile />
                    <Experience />
                    <Education />
                </Col>
                <Col xs={8}>
                    <Contacts />
                    <Skills />
                </Col>
            </Row>
        </div>
    );
};

export default App;
