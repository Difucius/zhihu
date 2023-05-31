import { createAction } from '../../utils/reducer/reducer.utils';
import { ANSWER_ACTION_TYPES } from './answer.types';

export const setCurrentUser = (answers) => {
    return createAction(ANSWER_ACTION_TYPES.SET_ANSWER, answers);
};
