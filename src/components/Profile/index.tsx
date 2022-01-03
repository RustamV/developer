import { Image, Space, Typography } from "antd";
import { EnvironmentOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Avatar from "../../images/rustam.png";
import styles from "./index.module.scss";

const Profile: React.FC = () => {
    return (
        <Space direction="vertical" className={styles.profile}>
            <Space align="start" size={30}>
                <Image width={200} src={Avatar} />
                <Space direction="vertical">
                    <Typography.Title level={1} className={styles.title}>
                        Валеев Рустам
                    </Typography.Title>
                    <Typography.Title level={5} className={styles.title}>
                        Frontend-developer
                    </Typography.Title>
                    <Space>
                        <Typography.Text type="secondary">
                            <EnvironmentOutlined /> Казань,
                        </Typography.Text>
                        <Typography.Text type="secondary">
                            <InfoCircleOutlined /> 25 лет
                        </Typography.Text>
                    </Space>
                </Space>
            </Space>
        </Space>
    );
};

export default Profile;
