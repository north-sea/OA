import Layout from "@/layout";

export default {
  path: "/bot",
  component: Layout,
  name: "机器人管理",
  alwaysShow: true,
  meta: { title: "机器人管理", icon: "el-icon-user",roles:['admin'] },
  children: [
    {
      path: "info",
      name: "机器人信息",
      component: () => import("@/views/bot/info"),
      meta: {
        title: "机器人信息",
      }
    },
    {
      path: "friends",
      name: "好友管理",
      component: () => import("@/views/bot/friends"),
      meta: {
        title: "好友管理",
      }
    }
  ]
};