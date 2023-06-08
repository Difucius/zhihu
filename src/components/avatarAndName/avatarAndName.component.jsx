import { Avatar, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const AvatarAndName = ({ questioner, msg = '' }) => {
    console.log('555555555');
    console.log(questioner);
    return (
        <Space size='small'>
            <Link to={`/users/${questioner._id}`}>
                <Avatar src={questioner.avatar_url} />
            </Link>
            <Text strong>{`${questioner.name}  ${msg}`}</Text>
        </Space>
    );
};
export default AvatarAndName;
