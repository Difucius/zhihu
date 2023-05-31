import request from '../utils/request/request';

export function getAnswerListData(data) {
    return request({
        url: `/questions`,
        method: 'get',
        params: data,
    });
}
