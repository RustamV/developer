import { Col, Row, Typography, List } from "antd";
import styles from "./index.module.scss";

interface Props {
    date: string;
    title: string;
    subtitle: string;
    data: string[];
}

const Timeline: React.FC<Props> = ({ date, title, subtitle, data }) => {
    return (
        <Row className={styles.timeitem}>
            <Col xs={8}>
                <Typography.Text type="secondary">{date}</Typography.Text>
            </Col>
            <Col xs={16}>
                <div className={styles.header}>
                    <Typography.Title level={4} className={styles.company}>
                        <strong>{title},</strong> {subtitle}
                    </Typography.Title>
                </div>
                <List
                    className={styles.list}
                    split={false}
                    size="small"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text>{item}</Typography.Text>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
};

export default Timeline;
