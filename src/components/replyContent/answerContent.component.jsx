import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const ReplyContent = ({ answerer, content, voteCount }) => (
    <Typography>
        <Paragraph>
            {content}
        </Paragraph>
    </Typography>
);
export default ReplyContent;
