import { Typography } from 'antd';
import { ReplyContainer, FooterContainer } from './replyContent.styles';
import AvatarAndName from '../avatarAndName/avatarAndName.component';

const { Title, Paragraph, Text, Link } = Typography;

const ReplyContent = ({ answerer, content, voteCount, answer }) => (

    <ReplyContainer>
        <Title>
            {`Reply To :  ${answer.title}`}
        </Title>
        <Typography>
            <Paragraph>
                {content}
            </Paragraph>
        </Typography>
        <FooterContainer>
            <AvatarAndName questioner={answerer} msg='回答'></AvatarAndName>
        </FooterContainer>
    </ReplyContainer>
);

export default ReplyContent;
