import request from '../utils/request/request';

export function login(data) {
    return request({
        url: `/users/login`,
        method: 'post',
        data,
    });
}
