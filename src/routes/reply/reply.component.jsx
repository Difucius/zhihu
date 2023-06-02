import CommentItem from '../../components/commentItem/commentItem.component';
import ReplyContent from '../../components/replyContent/answerContent.component';
import { getCommentById, getReplyById } from '../../api/anwser';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import { deleteComment } from '../../api/anwser';

const Reply = () => {
    const { answerId, replyId } = useParams();
    const [commentArr, setCommentArr] = useState([]);
    const [reply, setReply] = useState(null);

    const deleteComment = async (commentId) => {
        try {
            await deleteComment(answerId, replyId, commentId);
            const newArr = commentArr.filter((item) => item._id !== commentId);
            setCommentArr(newArr);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        const getComments = async () => {
            try {
                const commentArr = await getCommentById(answerId, replyId);
                setCommentArr(commentArr);
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
            {reply && <ReplyContent {...reply}></ReplyContent>}
            {commentArr && commentArr.map((item) => {
                return <CommentItem key={item._id} {...item} deleteComment />;
            })}
        </Fragment>
    );
};

export default Reply;
