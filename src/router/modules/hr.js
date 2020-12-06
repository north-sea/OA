import Layout from "@/layout";

export default {
  path: "/hr",
  component: Layout,
  name: "人力资源",
  alwaysShow: true,
  meta: { title: "人力资源", icon: "el-icon-user" },
  children: [
    {
      path: "employee",
      name: "员工信息",
      component: () => import("@/views/hr/employee"),
      meta: {
        title: "员工信息",
      }
    }
  ]
};
