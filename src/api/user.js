import request from '../utils/request/request';
export function getUser(data){
  return request({
    url:`/users/${data}`,
    method:'get',
  });

}
