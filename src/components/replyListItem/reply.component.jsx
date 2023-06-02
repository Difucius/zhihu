import { Card, Button, Typography } from 'antd';
import { CardContainer, FooterContainer, ButtonContainer } from './replyListItem.styles';
import { LikeTwoTone, DislikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AvatarAndName from '../avatarAndName/avatarAndName.component';

const { Paragraph } = Typography;

const { Meta } = Card;
const ReplyListItem = ({ _id, content, questionId, answerer }) => (

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
            <Link to={`/answer/${questionId}/reply/${_id}`}>
                <CardContainer>
                    <Paragraph>{content ? content : 'This is the content'}</Paragraph>
                </CardContainer>
            </Link>
            <FooterContainer>
                <ButtonContainer>
                    <Button icon={<LikeTwoTone />}>点赞</Button>
                    <Button icon={<DislikeTwoTone />} />
                </ButtonContainer>
                {/*<Button shape='circle' icon={<StarTwoTone />} />*/}
                <AvatarAndName questioner={answerer} msg='回答'/>
            </FooterContainer>

        </Card>

    )
;
export default ReplyListItem;
