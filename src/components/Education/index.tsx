import { SectionTitle, Timeline } from "..";
import { FileDoneOutlined } from "@ant-design/icons";

const Education: React.FC = () => {
    const data = ["Факультет информатики и робототехники", "Специальность - Информатика и вычислительная техника"];

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
