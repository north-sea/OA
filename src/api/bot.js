import request from "@/utils/request";

export function getBotFriends(params) {
  return request({
    url: "/bot/friends",
    method: "get",
    params
  });
}
