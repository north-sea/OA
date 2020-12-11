import request from "@/utils/request";

export function getTypes({ key }) {
  return request({
    url: `/type/${key}`,
    method: "get"
  });
}
export function getAllTypes(params) {
  return request({
    url: `/type`,
    method: "get",
    params
  });
}
export function insert(data) {
  return request({
    url: '/type',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/type',
    method: 'put',
    data
  })
}
export function remove(data) {
  return request({
    url: '/type',
    method: 'delete',
    data
  })
}
