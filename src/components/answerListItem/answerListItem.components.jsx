import { Card, Image, Button, Divider, Typography, Avatar,Space  } from 'antd';
import { CardContainer, FooterContainer } from './answerListItem.styles';
import { LikeTwoTone, DislikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
                <Space size='small'>
                <Avatar src={questioner.avatar_url}/><Text strong>{`${questioner.name}  提问`}</Text>
                </Space>
            </FooterContainer>
        </Card>
    )
;
export default AnswerListItem;
