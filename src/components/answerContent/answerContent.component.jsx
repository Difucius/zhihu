import { Typography } from 'antd';
import {AnswerContainer,FooterContainer} from './answerContent.styles';
import AvatarAndName from '../avatarAndName/avatarAndName.component';
const { Title, Paragraph } = Typography;

const AnswerContent = ({ title, description, questioner }) => (
    <AnswerContainer>
        <Typography>
            <Title>{title}</Title>
            <Paragraph>
                {description}
            </Paragraph>
        </Typography>
        <FooterContainer>
            <AvatarAndName questioner={questioner} msg='提问'/>
        </FooterContainer>
    </AnswerContainer>
);
export default AnswerContent;
