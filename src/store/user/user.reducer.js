import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    likes: [],
    dislikes: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        case USER_ACTION_TYPES.SET_LIKES:
            return {
                ...state,
                likes: payload,
            };
        case USER_ACTION_TYPES.SET_DISLIKES:
            return {
                ...state,
                dislikes: payload,
            };
        default:
            return state;
    }
};
