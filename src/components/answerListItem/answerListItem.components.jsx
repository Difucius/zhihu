import { Card, Image, Button } from 'antd';
import { CardContainer, FooterContainer } from './answerListItem.styles';
import { LikeTwoTone, DislikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const AnswerListItem = ({ _id, title, description }) => (

        <Card
            title={title}
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
                    <Image
                        width={200}
                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                    />
                    <Meta
                        description={description ? description : 'This is the description'}
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
export default AnswerListItem;
