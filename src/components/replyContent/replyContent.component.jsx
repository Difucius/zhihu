import { Button, Typography } from 'antd';
import { ReplyContainer, FooterContainer } from './replyContent.styles';
import AvatarAndName from '../avatarAndName/avatarAndName.component';
import { ButtonContainer } from '../commentItem/commentItem.styles';
import { Fragment } from 'react';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const { Title, Paragraph } = Typography;

const ReplyContent = ({ _id, answerer, content, answer, showChangeReply, deleteReply }) => {
    const currentUser = useSelector(selectCurrentUser);
    return (
        <ReplyContainer>
            <Title>
                {`Reply To :  ${answer.title}`}
            </Title>
            <Typography>
                <Paragraph>
                    {content}
                </Paragraph>
            </Typography>
            <FooterContainer>
                <ButtonContainer>
                    {currentUser && currentUser._id === answerer._id &&
                        <Fragment>
                            <Button icon={<EditTwoTone onClick={showChangeReply} />}></Button>
                            <Button icon={<DeleteTwoTone onClick={() => {
                                deleteReply(_id);
                            }} />}></Button>
                        </Fragment>}
                </ButtonContainer>
                <AvatarAndName questioner={answerer} msg='回答'></AvatarAndName>
            </FooterContainer>
        </ReplyContainer>);
};

export default ReplyContent;
