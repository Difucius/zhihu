import { ANSWER_ACTION_TYPES } from './answer.types';

const INITIAL_STATE = {
    answers: [],
};

export const answerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ANSWER_ACTION_TYPES.SET_ANSWER:
            return {
                ...state,
                answers: payload,
            };
        case ANSWER_ACTION_TYPES.ADD_ANSWER:
            return {
                ...state,
                answers: payload,
            };
        default:
            return state;
    }
};
