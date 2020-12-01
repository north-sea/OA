import Vue from "vue";
import VueRouter from "vue-router";

import route from "./routes";

const component = { template: "<router-view/>" };

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [
      {
        path: "/",
        component,
        children: [{ path: "", component: () => import("pages/Index.vue") }]
      },
      ...route,

      // Always leave this as last one,
      // but you can also remove it
      {
        path: "*",
        component: () => import("pages/Error404.vue")
      }
    ],

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
