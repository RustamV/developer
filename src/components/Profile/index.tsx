import { Col, Image, Row, Space, Typography } from "antd";
import { EnvironmentOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Avatar from "../../images/rustam.png";
import styles from "./index.module.scss";

const Profile: React.FC = () => {
    return (
        <Space direction="vertical" className={styles.profile}>
            <Row gutter={30}>
                <Col xs={24} md={10}>
                    <Image width={200} src={Avatar} />
                </Col>
                <Col xs={24} md={14}>
                    <Space direction="vertical">
                        <Typography.Title level={1}>Валеев Рустам</Typography.Title>
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
                </Col>
            </Row>
        </Space>
    );
};

export default Profile;
