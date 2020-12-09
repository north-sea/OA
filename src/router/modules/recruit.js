import Layout from "@/layout";

export default {
  path: "/recruit",
  component: Layout,
  name: "招聘管理",
  alwaysShow: true,
  meta: { title: "招聘管理", icon: "el-icon-user" },
  children: [
    {
      path: "info",
      name: "邀约信息",
      component: () => import("@/views/recruit/info"),
      meta: {
        title: "邀约信息",
      }
    },
    {
      path: "config",
      name: " 配置管理",
      component: () => import("@/views/recruit/config"),
      meta: {
        title: "配置管理",
        roles:['admin']
      }
    }
  ]
};
