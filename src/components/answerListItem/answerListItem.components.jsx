import { Card, Divider, Typography } from 'antd';
import { CardContainer, FooterContainer } from './answerListItem.styles';
import { Link } from 'react-router-dom';
import AvatarAndName from '../avatarAndName/avatarAndName.component'

const { Title, Paragraph, Text } = Typography;
const AnswerListItem = ({ _id, title, description, questioner }) => (
        <Card
            bordered={false}
            style={{
                width: 1200,
                marginTop: 20,
                flexBasis: '100%',
                marginLeft: 100,
                marginRight: 100,

            }}
        >
            <Link to={`/answer/${_id}`}>
                <CardContainer>
                    <Typography>
                        <Title>{title}</Title>
                        <Divider />
                        <Paragraph>{description ? description : 'This is the description'}</Paragraph>
                    </Typography>
                </CardContainer>
            </Link>
            <FooterContainer>
               <AvatarAndName questioner={questioner} msg='提问'/>
            </FooterContainer>
        </Card>
    )
;
export default AnswerListItem;
