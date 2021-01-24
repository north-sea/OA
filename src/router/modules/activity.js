import Layout from "@/layout";

export default {
  path: "/activity",
  component: Layout,
  name: "活动管理",
  alwaysShow: true,
  meta: { title: "活动管理", icon: "el-icon-user",roles:['customer','admin'] },
  children: [
    {
      path: "qrcode",
      name: "二维码管理",
      component: () => import("@/views/activity/qrcode"),
      meta: {
        title: "二维码管理",
      }
    }
  ]
};