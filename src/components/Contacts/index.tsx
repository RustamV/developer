import { SectionTitle } from "..";
import { ContactsOutlined } from "@ant-design/icons";

const Contacts: React.FC = () => {
    return (
        <div>
            <SectionTitle title="Контакты" icon={<ContactsOutlined />} />
        </div>
    );
};

export default Contacts;
