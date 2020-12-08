import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/interviewer',
    method: 'get',
    params
  })
}
