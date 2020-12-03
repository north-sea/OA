const component = { template: "<router-view/>" };

export default {
  path: "/bot",
  name: "BOT",
  component,
  meta: {
    title: "机器人管理",
    icon: "fa-robot"
  },
  children: [
    {
      name: "BotInfo",
      path: "/bot/info",
      component: () => import("@/pages/Bot/info.vue"),
      meta: {
        title: "机器人信息",
        icon: "contact_page"
      }
    }
  ]
};
