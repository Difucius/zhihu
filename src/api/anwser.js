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
