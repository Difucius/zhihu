import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const setLikesArr = (likes) => {
    return createAction(USER_ACTION_TYPES.SET_LIKES, likes);
};

export const setDislikeARR = (dislikes) => {
    return createAction(USER_ACTION_TYPES.SET_DISLIKES, dislikes);
};

export const setNewLike = (likes, reply) => {
    const newLikes = [...likes, reply];
    return createAction(USER_ACTION_TYPES.SET_LIKES, newLikes);
};

export const setRemoveLike = (likes, reply) => {
    const newLikes = likes.filter((item) => item._id !== reply._id);
    return createAction(USER_ACTION_TYPES.SET_LIKES, newLikes);
};
