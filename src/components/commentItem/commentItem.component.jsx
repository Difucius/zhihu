import { Card, Button, Input, Typography } from 'antd';
import { CardContainer, FooterContainer, ButtonContainer, AvatarContainer } from './commentItem.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Fragment, useState } from 'react';
import AvatarAndName from '../avatarAndName/avatarAndName.component';

const { Paragraph } = Typography;
const CommentItem = ({ content, commentator, deleteComment, _id }) => {
    const currentUser = useSelector(selectCurrentUser);
    const  userId  = currentUser ? currentUser._id :  '' ;
    const [isEdit, setIsEdit] = useState(false);
    const onChange = (e) => {
        const value = e.target.value;
    };

    const onSubmit = () => {

    };

    const onDelete = () => {
        console.log(deleteComment);
    };

    return (
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
                <Paragraph>{content ? content : 'This is the content'}</Paragraph>
            </CardContainer>
            <FooterContainer>
                <ButtonContainer>
                    {userId === commentator._id &&
                        <Fragment>
                            <Button icon={<EditTwoTone />}></Button>
                            <Button icon={<DeleteTwoTone />}></Button>
                        </Fragment>}
                </ButtonContainer>
                <AvatarContainer>
                    <AvatarAndName questioner={commentator} msg='评论' />
                </AvatarContainer>
            </FooterContainer>

        </Card>
    );
};
export default CommentItem;
