import request from "@/utils/request";

export function getEmployeeList(data) {
  return request({
    url: "/employee/list",
    method: "post",
    data
  });
}
export function getEmployeebirth(data) {
  return request({
    url: "/employee/birth",
    method: "post",
    data
  });
}
