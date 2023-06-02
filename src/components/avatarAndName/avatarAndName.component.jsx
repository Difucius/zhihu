import { Avatar, Space, Typography } from 'antd';
const { Text } = Typography;

const AvatarAndName = ({ questioner, msg }) => {
    return (
        <Space size='small'>
            <Avatar src={questioner.avatar_url} /><Text strong>{`${questioner.name}  ${msg}`}</Text>
        </Space>
    );
};
export default AvatarAndName
