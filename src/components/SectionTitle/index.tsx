import { Space, Typography } from "antd";
import styles from "./index.module.scss";

interface Props {
    title: string;
    icon?: any;
}

const SectionTitle: React.FC<Props> = ({ title, icon }) => {
    return (
        <Space>
            <Typography.Title level={3} className={styles.title}>
                {icon} {title}
            </Typography.Title>
        </Space>
    );
};

export default SectionTitle;
