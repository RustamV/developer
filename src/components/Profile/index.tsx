import { Image, Space, Typography } from "antd";
import Avatar from "../../images/rustam.png";

const Profile: React.FC = () => {
    return (
        <Space direction="vertical">
            <Space align="start">
                <Image width={200} src={Avatar} />
                <Space direction="vertical">
                    <Typography.Title level={1}>Валеев Рустам</Typography.Title>
                    <Typography.Text>Frontend-developer</Typography.Text>
                </Space>
            </Space>
            <Space>
                <Typography.Text>Казань</Typography.Text>
                <Typography.Text>25 лет</Typography.Text>
            </Space>
        </Space>
    );
};

export default Profile;
