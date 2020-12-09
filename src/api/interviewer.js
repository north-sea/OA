import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/interviewer',
    method: 'get',
    params
  })
}

export function insert(data) {
  return request({
    url: '/interviewer',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/interviewer',
    method: 'put',
    data
  })
}
