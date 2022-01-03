import { SectionTitle, Timeline } from "..";
import { FileDoneOutlined } from "@ant-design/icons";

const Education: React.FC = () => {
    const data = [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
    ];

    return (
        <div>
            <SectionTitle title="Образование" icon={<FileDoneOutlined />} />
            <Timeline
                date="2016 - 2020"
                title="Уфимский Государственный Авиационный Технический Университет"
                subtitle="Бакалавр"
                data={data}
            />
        </div>
    );
};

export default Education;
