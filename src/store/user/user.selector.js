export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};

export const selectLikes = (state) => {
    return state.user.likes;
};


export const selectDislikes = (state) => {
    return state.user.dislikes;
};
