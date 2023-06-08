import { Card, Button, Typography, Divider } from 'antd';
import {
    CardContainer,
    FooterContainer,
    ButtonContainer,
    AvatarContainer,
    ChildrenContainer,
} from './commentItem.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { DeleteTwoTone, EditTwoTone, RocketTwoTone } from '@ant-design/icons';
import { Fragment } from 'react';
import AvatarAndName from '../avatarAndName/avatarAndName.component';

const { Paragraph } = Typography;
const CommentItem = ({ content, commentator, deleteComment, _id, showChangeModal, showCommentToC, children }) => {
    const currentUser = useSelector(selectCurrentUser);
    const userId = currentUser ? currentUser._id : '';
    const onChange = (_id) => {
        showChangeModal(_id);
    };

    const onDelete = (_id) => {
        deleteComment(_id);
    };

    const onCommentToComment = (commentator, _id) => {
        const replyComment = {
            commentator,
            _id,
        };
        showCommentToC(replyComment);
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
                            <Button icon={<EditTwoTone />} onClick={() => {
                                onChange(_id);
                            }}></Button>
                            <Button icon={<DeleteTwoTone />} onClick={() => {
                                onDelete(_id);
                            }}></Button>
                        </Fragment>}
                    <Button icon={<RocketTwoTone />} onClick={() => {
                        onCommentToComment(commentator, _id);
                    }}></Button>
                </ButtonContainer>
                <AvatarContainer>
                    <AvatarAndName questioner={commentator} msg='评论' />
                </AvatarContainer>
            </FooterContainer>
            <ChildrenContainer>
                {
                    children && children.length > 0 && children.map((child) => {
                        return (
                            <div>
                                <Divider />
                                <Paragraph>{child.content}</Paragraph>
                                <FooterContainer>
                                    <ButtonContainer>
                                        {userId === child.commentator._id &&
                                            <Fragment>
                                                <Button icon={<EditTwoTone />} onClick={() => {
                                                    onChange(child._id);
                                                }}></Button>
                                                <Button icon={<DeleteTwoTone />} onClick={() => {
                                                    onDelete(child._id);
                                                }}></Button>
                                            </Fragment>}
                                        <Button icon={<RocketTwoTone />} onClick={() => {
                                            onCommentToComment(child.commentator, _id);
                                        }}></Button>
                                    </ButtonContainer>
                                    <AvatarContainer>
                                        <AvatarAndName questioner={child.replyTo} />
                                        <AvatarAndName questioner={child.commentator} msg='回复' />
                                    </AvatarContainer>
                                </FooterContainer>

                            </div>
                        );
                    })
                }

            </ChildrenContainer>
        </Card>
    );
};
export default CommentItem;
