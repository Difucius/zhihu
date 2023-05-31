import { Card } from 'antd';
import { CardContainer } from './commentItem.styles';

const { Meta } = Card;
const commentItem = ({ content, commentator }) => (
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
            <CardContainer>
                <Meta
                    description={content ? content : 'This is the content'}
                />
            </CardContainer>

        </Card>
    )
;
export default commentItem;
