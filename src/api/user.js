import request from "@/utils/request";

export function login(params) {
  return request({
    url: "/login",
    method: "get",
    params
  });
}

export function getInfo(token) {
  return request({
    url: "/getInfo",
    method: "get",
    params: { token }
  });
}

// export function logout() {
//   return request({
//     url: "/vue-admin-template/user/logout",
//     method: "post"
//   });
// }
