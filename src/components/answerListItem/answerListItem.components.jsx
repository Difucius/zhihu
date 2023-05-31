import { Card, Image, Button } from 'antd';
import { CardContainer, FooterContainer } from './answerListItem.styles';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Meta } = Card;
const AnswerListItem = ({ title, url, description }) => (
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
        <CardContainer>
            <Image
                width={200}
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            />
            <Meta
                description={description ? description : 'This is the description'}
            />
        </CardContainer>
        <FooterContainer>
            <Button type='primary' icon={<CaretUpOutlined />}>Search</Button>
            <Button type='primary' shape='circle' icon={<CaretDownOutlined />} />
        </FooterContainer>

    </Card>
);
export default AnswerListItem;
