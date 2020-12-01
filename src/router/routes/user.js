const component = { template: "<router-view/>" };

export default {
  path: "/user",
  name: "User",
  component,
  meta: {
    title: "用户管理",
    icon: "engineering"
  },
  children: [
    {
      name: "UserInfo",
      path: "/user/info",
      component: () => import("@/pages/User/Info.vue"),
      meta: {
        title: "账户信息",
        icon: "folder_shared"
      }
    }
  ]
};
