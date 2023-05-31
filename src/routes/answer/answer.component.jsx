import AnswerContent from '../../components/answerContent/answerContent.component';
import { useParams } from 'react-router';
import { getQuestionById, getReplyByQuestionId } from '../../api/anwser';
import { useEffect, useState, Fragment } from 'react';
import ReplyListItem from '../../components/replyListItem/reply.component';


export const Answer = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [replyArr, setReply] = useState([]);
    useEffect(() => {
        const getQustion = async () => {
            const question = await getQuestionById(id);
            setQuestion(question);
        };
        const getReply = async () => {
            const replyArr = await getReplyByQuestionId(id);
            console.log(replyArr);
            setReply(replyArr);
        };
        getQustion();
        getReply();
    }, []);
    return (
        <Fragment>
            {
                question && <AnswerContent title={question.title} description={question.description} />
            }
            {
                replyArr.length !== 0 && replyArr.map((item) => {
                    return <ReplyListItem key={item._id} {...item} />;
                })
            }
        </Fragment>

    );
};
export default Answer;
