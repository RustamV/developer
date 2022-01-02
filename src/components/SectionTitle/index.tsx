import { Space, Typography } from "antd";

interface Props {
    title: string;
    icon?: any;
}

const SectionTitle: React.FC<Props> = ({ title, icon }) => {
    return (
        <Space>
            <Typography.Title level={3}>
                {icon} {title}
            </Typography.Title>
        </Space>
    );
};

export default SectionTitle;
