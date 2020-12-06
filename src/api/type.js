
export function getTypes(params) {
  return request({
    url: "/type",
    method: "get",
    params
  });
}