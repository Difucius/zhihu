import { Card, Button, Typography } from 'antd';
import { CardContainer, FooterContainer, ButtonContainer } from './replyListItem.styles';
import { LikeTwoTone, DislikeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AvatarAndName from '../avatarAndName/avatarAndName.component';
import { addLike, removeLike } from '../../api/user';
import { selectLikes } from '../../store/user/user.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setNewLike, setRemoveLike } from '../../store/user/user.action';

const { Paragraph } = Typography;

const ReplyListItem = ({ _id, content, questionId, answerer, like, dislike, voteCount }) => {
    const dispatch = useDispatch();
    const likes = useSelector(selectLikes);
    const onLike = async () => {
        if (like === false) {
            await addLike(_id);
            dispatch(setNewLike(likes, { _id }));
        } else {
            await removeLike(_id);
            dispatch(setRemoveLike(likes, { _id }));
        }
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
            <Link to={`/answer/${questionId}/reply/${_id}`}>
                <CardContainer>
                    <Paragraph>{content ? content : 'This is the content'}</Paragraph>
                </CardContainer>
            </Link>
            <FooterContainer>
                <ButtonContainer>
                    <Button onClick={onLike} type={like ? 'primary' : 'default'}
                            icon={<LikeTwoTone />}>{`点赞 ${voteCount}`}</Button>
                    {/*<Button icon={<DislikeTwoTone />} />*/}
                </ButtonContainer>
                {/*<Button shape='circle' icon={<StarTwoTone />} />*/}
                <AvatarAndName questioner={answerer} msg='回答' />
            </FooterContainer>

        </Card>
    );
};
export default ReplyListItem;
