import AnswerListItem from '../../components/answerListItem/answerListItem.components';
import { ListContainer, ButtonContainer } from './answerList.styles.styles';
import { useDispatch } from 'react-redux';
import { getAnswerListData, createQuestion } from '../../api/anwser';
import { Fragment, useEffect, useState, useRef } from 'react';
import { setAnswers, addAnswers } from '../../store/answer/answer.action';
import { useSelector } from 'react-redux';
import { selectAnswers } from '../../store/answer/answer.selector';
import { Button, Modal, Input, message } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { selectCurrentUser } from '../../store/user/user.selector';

const { TextArea } = Input;


const AnswerList = () => {
    const dispatch = useDispatch();
    const answers = useSelector(selectAnswers);
    const currentUser = useSelector(selectCurrentUser);
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const description = useRef(null);
    const title = useRef(null);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        const titleVal = title.current.input.value;
        const descriptionVal = description.current.resizableTextArea.textArea.value;
        if (!titleVal || !descriptionVal) {
            messageApi.open({
                type: 'warning',
                content: 'This is a warning message',
            });
            return;
        }
        const newAnswer = { title: titleVal, description: descriptionVal };
        try {
            const { _id } = await createQuestion(newAnswer);
            dispatch(addAnswers(answers, {
                _id,
                title: titleVal,
                description: descriptionVal,
                questioner: {
                    name: currentUser.username,
                    avatar_url: currentUser.avatar_url,
                    _id: currentUser._id,
                },

            }));
            setIsModalOpen(false);
        } catch (e) {
            console.log(e);
        }

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function getAnswerList() {
            try {
                const answerList = await getAnswerListData();
                dispatch(setAnswers(answerList));
            } catch (e) {
                console.log(e);
            }
        }

        getAnswerList();
    }, []);

    return (
        <Fragment>
            {contextHolder}
            <ListContainer>
                {answers.map((item) => {
                    return <AnswerListItem key={item._id} {...item} />;
                })
                }
            </ListContainer>
            <ButtonContainer onClick={showModal}><Button shape='circle' size='large'
                                                         icon={<PlusCircleTwoTone />}></Button></ButtonContainer>
            <Modal title='Basic Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input ref={title} placeholder='Basic usage' />
                <br />
                <br />
                <TextArea ref={description} rows={4} />
            </Modal>
        </Fragment>
    );

};

export default AnswerList;
