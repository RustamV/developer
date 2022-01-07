import { SectionTitle } from "..";
import { CodeOutlined, RightOutlined } from "@ant-design/icons";
import { List, Typography } from "antd";
import styles from "./index.module.scss";

const Learning: React.FC = () => {
    const data = ["TypeScript", "Material UI", "GraphQL"];

    return (
        <div>
            <SectionTitle title="На изучении" icon={<CodeOutlined />} />
            <List
                className={styles.list}
                split={false}
                size="small"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text>
                            <RightOutlined />
                            {item}
                        </Typography.Text>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Learning;
