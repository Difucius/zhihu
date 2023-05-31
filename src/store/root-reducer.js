import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { answerReducer } from './answer/answer.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    answer: answerReducer,
});

