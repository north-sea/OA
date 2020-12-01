const component = { template: "<router-view/>" };

export default {
  path: "/hr",
  name: "HR",
  component,
  meta: {
    title: "人事管理",
    icon: "groups"
  },
  children: [
    {
      name: "HREmployee",
      path: "/hr/employee",
      component: () => import("@/pages/HR/employee.vue"),
      meta: {
        title: "员工信息",
        icon: "contact_page"
      }
    }
  ]
};
