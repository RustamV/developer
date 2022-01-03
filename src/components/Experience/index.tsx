import { SectionTitle, Timeline } from "..";
import { LaptopOutlined } from "@ant-design/icons";
import { Col, Row, Typography, List } from "antd";
import styles from "./index.module.scss";

const Experience: React.FC = () => {
    const data = [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
    ];

    return (
        <div>
            <SectionTitle title="Опыт работы" icon={<LaptopOutlined />} />
            <Timeline date="Сентябрь 2020 - н.в." title="Drakkar" subtitle="Frontend-developer" data={data} />
            <Timeline date="Май 2019 - Июнь 2019" title="People Plans" subtitle="HTML-верстальщик" data={data} />
            <Timeline date="Октябрь 2018 - Март 2019" title="Амбити" subtitle="HTML-верстальщик" data={data} />
        </div>
    );
};

export default Experience;
