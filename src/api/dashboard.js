import request from "@/utils/request";

export function getDashboardInfo(params) {
  return request({
    url: "/dashboard",
    method: "get",
    params
  });
}