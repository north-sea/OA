import request from "@/utils/request";

export function getBotInfo(params) {
  return request({
    url: "/bot",
    method: "get",
    params
  });
}
