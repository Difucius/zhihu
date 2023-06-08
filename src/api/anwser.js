import request from '../utils/request/request';

export function getAnswerListData(data) {
    return request({
        url: `/questions`,
        method: 'get',
        params: data,
    });
}

export function getQuestionById(data) {
    return request({
        url: `/questions/${data}`,
        method: 'get',
    });
}

export function getReplyByQuestionId(data) {
    return request({
        url: `/questions/${data}/answers`,
        method: 'get',
    });
}

export function getCommentById(questionId, replyId) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/comments`,
        method: 'get',
    });
}

export function getReplyById(questionId, replyId) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/`,
        method: 'get',
    });
}

export function deleteCommentById(questionId, replyId, commentId) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/comments/${commentId}`,
        method: 'delete',
    });
}


export function createQuestion(data) {
    return request({
        url: `/questions`,
        method: 'post',
        data,
    });
}

export function createReply(questionId, data) {
    return request({
        url: `/questions/${questionId}/answers`,
        method: 'post',
        data,
    });
}

export function createComment(questionId, replyId, data) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/comments`,
        method: 'post',
        data,
    });
}

export function changeComment(questionId, replyId, commentId, data) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/comments/${commentId}`,
        method: 'patch',
        data,
    });
}

export function changeReplayById(questionId, replyId, data) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}`,
        method: 'patch',
        data,
    });
}

export function deleteReplayById(questionId, replyId) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}`,
        method: 'delete',
    });
}



