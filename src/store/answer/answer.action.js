import { createAction } from '../../utils/reducer/reducer.utils';
import { ANSWER_ACTION_TYPES } from './answer.types';

export const setAnswers = (answers) => {
    return createAction(ANSWER_ACTION_TYPES.SET_ANSWER, answers);
};

export const addAnswers = (answers, answerToAdd) => {
    answers.push(answerToAdd);
    return createAction(ANSWER_ACTION_TYPES.ADD_ANSWER, answers);
};
