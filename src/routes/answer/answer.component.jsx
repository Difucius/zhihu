import AnswerContent from '../../components/answerContent/answerContent.component';
import { useParams } from 'react-router';
import { getQuestionById, getReplyByQuestionId, createReply } from '../../api/anwser';
import { useEffect, useState, Fragment, useRef } from 'react';
import ReplyListItem from '../../components/replyListItem/reply.component';
import { Divider, Button, Modal, Input, message } from 'antd';
import { ButtonContainer } from './answer.styles';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { selectCurrentUser, selectLikes, selectDislikes } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { extendedAnswerArr } from '../../utils/dataStructerHelper/like';

const { TextArea } = Input;


export const Answer = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [replyArr, setReply] = useState([]);
    const currentUser = useSelector(selectCurrentUser);
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const description = useRef(null);


    const likes = useSelector(selectLikes);
    const dislikes = useSelector(selectDislikes);


    const getQuestion = async () => {
        const question = await getQuestionById(id);
        setQuestion(question);
    };
    const getReply = async () => {
        const replyArr = await getReplyByQuestionId(id);
        const arr = extendedAnswerArr(replyArr, likes, dislikes);
        setReply(arr);
    };

    const showModal = () => {
        setIsModalOpen(true);
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
            const reply = await createReply(question._id, { content: descriptionVal });
            setReply([...replyArr, {
                ...reply, answerer:
                    {
                        name: currentUser.username,
                        _id: currentUser._id,
                        avatar_url: currentUser.avatar_url,
                    },
            }]);
            setIsModalOpen(false);
        } catch (e) {
            console.log(e);
        }

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getQuestion();
        getReply();
    }, []);

    useEffect(() => {
        // console.log('run again');
        // const arr = extendedAnswerArr(replyArr, likes, dislikes, true);
        // console.log(arr);
        // setReply([...arr]);
        async function update() {
            const replyArr = await getReplyByQuestionId(id);
            const arr = extendedAnswerArr(replyArr, likes, dislikes);
            setReply([...arr]);
        }

        update();
    }, [likes]);


    return (
        <Fragment>
            {
                question && <AnswerContent title={question.title} description={question.description}
                                           questioner={question.questioner} />
            }
            <Divider />
            {contextHolder}
            {
                replyArr.length !== 0 && replyArr.map((item) => {
                    return <ReplyListItem key={item._id} {...item} />;
                })
            }
            <ButtonContainer onClick={showModal}><Button shape='circle' size='large'
                                                         icon={<PlusCircleTwoTone />}></Button></ButtonContainer>
            <Modal title='写回答' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{question && question.title}</p>
                <TextArea ref={description} rows={4} />
            </Modal>
        </Fragment>

    );
};
export default Answer;
