import request from "@/utils/request";

export function getTypes({ key }) {
  return request({
    url: `/type/${key}`,
    method: "get"
  });
}
