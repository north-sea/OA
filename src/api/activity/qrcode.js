
import request from "@/utils/request";

export function getList(params) {
  return request({
    url: '/activity/qrcode',
    method: 'get',
    params
  })
}

export function insert(data) {
  return request({
    url: '/activity/qrcode',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/activity/qrcode',
    method: 'put',
    data
  })
}

export function remove(data) {
  return request({
    url: '/activity/qrcode',
    method: 'delete',
    data
  })
}