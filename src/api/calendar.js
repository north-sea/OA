import request from "@/utils/request";

export function getCalendarData() {
  return request({
    url: "/calendar",
    method: "get",
  });
}