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

export function deleteComment(questionId, replyId, commentId) {
    return request({
        url: `/questions/${questionId}/answers/${replyId}/comments/${commentId}`,
        method: 'delete',
    });
}
