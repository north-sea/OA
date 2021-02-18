
import request from "@/utils/request";

export function getList(params) {
  return request({
    url: '/api/customer',
    method: 'get',
    params
  })
}