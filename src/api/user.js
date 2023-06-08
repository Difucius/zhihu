import request from '../utils/request/request';

export function getUser(data) {
    return request({
        url: `/users/${data}`,
        method: 'get',
    });

}

export function getLikesArr(userId) {
    return request({
        url: `/users/${userId}/likingAnswers`,
        method: 'get',
    });
}


export function getDislikesArr(userId) {
    return request({
        url: `/users/${userId}/dislikingAnswers`,
        method: 'get',
    });
}


export function addLike(replyId) {
    return request({
        url: `/users/likingAnswers/${replyId}`,
        method: 'put',
    });
}

export function removeLike(replyId) {
    return request({
        url: `/users/likingAnswers/${replyId}`,
        method: 'delete',
    });
}

export function changeUserInfo(userId, data) {
    return request({
        url: `/users/${userId}`,
        method: 'patch',
        data
    });
}


