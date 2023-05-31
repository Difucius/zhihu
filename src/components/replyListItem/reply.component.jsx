import { Card, Button } from 'antd';
import { CardContainer, FooterContainer } from './replyListItem.styles';
import { LikeTwoTone, DislikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const ReplyListItem = ({ _id, content }) => (

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
                    <Meta
                        description={content ? content : 'This is the content'}
                    />
                </CardContainer>
            </Link>
            <FooterContainer>
                <Button icon={<LikeTwoTone />}>点赞</Button>
                <Button icon={<DislikeTwoTone />} />
                <Button shape='circle' icon={<StarTwoTone />} />
            </FooterContainer>

        </Card>

    )
;
export default ReplyListItem;
