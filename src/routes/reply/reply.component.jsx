import CommentItem from '../../components/commentItem/commentItem.component';
import ReplyContent from '../../components/replyContent/replyContent.component';
import {
    changeComment,
    getCommentById,
    getQuestionById,
    getReplyById,
    changeReplayById,
    deleteReplayById,
} from '../../api/anwser';
import { useState, useEffect, Fragment, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button, Divider, Input, Modal, message } from 'antd';
import { ButtonContainer } from './reply.styles';
import { deleteCommentById, createComment } from '../../api/anwser';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { extendedComment } from '../../utils/dataStructerHelper/comment';

const { TextArea } = Input;

const Reply = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { answerId, replyId } = useParams();
    const [commentArr, setCommentArr] = useState([]);
    const [answer, setAnswer] = useState({});
    const [messageApi, contextHolder] = message.useMessage();
    const [reply, setReply] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);
    const [isModal4Open, setIsModal4Open] = useState(false);
    const [selectedComment, setSelectedComment] = useState('');
    const [replyComment, setReplyComment] = useState({});
    const description = useRef(null);
    const description2 = useRef(null);
    const description3 = useRef(null);
    const description4 = useRef(null);

    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const showChangeModal = (commentID) => {
        setSelectedComment(commentID);
        setIsModal2Open(true);
    };
    const showChangeReply = () => {
        setIsModal3Open(true);
    };

    const deleteReply = async (replyId) => {
        try {
            await deleteReplayById(answerId, replyId);
            navigate(`/answer/${answerId}`);
        } catch (e) {
            console.log(e);
        }
    };
    const showCommentToC = (replyComment) => {
        setReplyComment(replyComment);
        setIsModal4Open(true);
    };
    const handleOk = async () => {
        const descriptionVal = description.current.resizableTextArea.textArea.value;
        if (!descriptionVal) {
            messageApi.open({
                type: 'warning',
                content: 'This is a warning message',
            });
            return;
        }
        try {
            const comment = await createComment(answerId, replyId, { content: descriptionVal });
            setCommentArr([...commentArr, comment]);
            setIsModalOpen(false);
        } catch (e) {
            console.log(e);
        }

    };
    const handleChange = async () => {
        const descriptionVal = description2.current.resizableTextArea.textArea.value;
        if (!descriptionVal) {
            messageApi.open({
                type: 'warning',
                content: 'This is a warning message',
            });
            return;
        }
        await changeComment(answerId, replyId, selectedComment, { content: descriptionVal });
        const commentArr = await getCommentById(answerId, replyId);
        const extendArr = extendedComment(commentArr);
        setCommentArr(extendArr);
        setIsModal2Open(false);
    };

    const handleChangeReply = async () => {
        const descriptionVal = description3.current.resizableTextArea.textArea.value;
        if (!descriptionVal) {
            messageApi.open({
                type: 'warning',
                content: 'This is a warning message',
            });
            return;
        }
        await changeReplayById(answerId, replyId, { content: descriptionVal });
        reply.content = descriptionVal;
        setReply(reply);
        setIsModal3Open(false);
    };

    const handleCommentToC = async () => {
        const descriptionVal = description4.current.resizableTextArea.textArea.value;
        if (!descriptionVal) {
            messageApi.open({
                type: 'warning',
                content: 'This is a warning message',
            });
            return;
        }
        try {
            const comment = await createComment(answerId, replyId, {
                content: descriptionVal,
                rootCommentId: replyComment._id,
                replyTo: replyComment.commentator._id,
            });
            const commentArr = await getCommentById(answerId, replyId);
            const extendArr = extendedComment(commentArr);
            setCommentArr(extendArr);
            setIsModal4Open(false);
        } catch (e) {

        }

    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleCancel2 = () => {
        setIsModal2Open(false);
    };
    const handleCancel3 = () => {
        setIsModal3Open(false);
    };
    const handleCancel4 = () => {
        setIsModal4Open(false);
    };

    const deleteComment = async (commentId) => {
        try {
            await deleteCommentById(answerId, replyId, commentId);
            const commentArr = await getCommentById(answerId, replyId);
            const extendArr = extendedComment(commentArr);
            setCommentArr(extendArr);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const getComments = async () => {
            try {
                const commentArr = await getCommentById(answerId, replyId);
                const extendArr = extendedComment(commentArr);
                setCommentArr(extendArr);
                const answer = await getQuestionById(answerId);
                setAnswer(answer);
            } catch (e) {
                console.log(e);
            }
        };
        const getReply = async () => {
            try {
                const reply = await getReplyById(answerId, replyId);
                setReply(reply);
            } catch (e) {
                console.log(e);
            }
        };
        getReply();
        getComments();
    }, []);


    return (
        <Fragment>
            {contextHolder}
            {reply && <ReplyContent {...reply} answer={answer} deleteReply={deleteReply}
                                    showChangeReply={showChangeReply}></ReplyContent>}
            <Divider />
            {commentArr && commentArr.map((item) => {
                return <CommentItem key={item._id} {...item} deleteComment={deleteComment}
                                    showChangeModal={showChangeModal} showCommentToC={showCommentToC} />;
            })}
            <ButtonContainer onClick={showModal}>
                <Button shape='circle' size='large'
                        icon={<PlusCircleTwoTone />}></Button>
            </ButtonContainer>
            <Modal title='新建评论' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <TextArea ref={description} rows={4} />
            </Modal>
            <Modal title='修改评论' open={isModal2Open} onOk={handleChange} onCancel={handleCancel2}>
                <TextArea ref={description2} rows={4} />
            </Modal>
            <Modal title='修改回答' open={isModal3Open} onOk={handleChangeReply} onCancel={handleCancel3}>
                <TextArea ref={description3} rows={4} />
            </Modal>
            <Modal title='新建评论' open={isModal4Open} onOk={handleCommentToC} onCancel={handleCancel4}>
                <TextArea ref={description4} rows={4} />
            </Modal>
        </Fragment>
    );
};

export default Reply;
