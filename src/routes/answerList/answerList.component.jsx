import AnswerListItem from '../../components/answerListItem/answerListItem.components';
import { ListContainer } from './answerList.styles.styles';
import { useDispatch } from 'react-redux';
import { getAnswerListData } from '../../api/anwser';
import { useEffect } from 'react';
import { setCurrentUser } from '../../store/answer/answer.action';
import { useSelector } from 'react-redux';
import { selectAnswers } from '../../store/answer/answer.selector';

const AnswerList = () => {
    const dispatch = useDispatch();
    const answers = useSelector(selectAnswers);
    useEffect(() => {
        async function getAnswerList() {
            try {
                const answerList = await getAnswerListData();
                dispatch(setCurrentUser(answerList));
            } catch (e) {
                console.log(e);
            }
        }

        getAnswerList();
    }, []);

    return (
        <ListContainer>
            {answers.map((item) => {
                return <AnswerListItem {...item} />;
            })
            }
        </ListContainer>
    );

};

export default AnswerList;
