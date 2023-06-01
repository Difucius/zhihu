import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AnswerContent = ({ title, description, questioner }) => (
    <Typography>
        <Title>{title}</Title>
        <Paragraph>
            {description}
        </Paragraph>
    </Typography>
);
export default AnswerContent;
