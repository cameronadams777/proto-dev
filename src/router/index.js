import Vue from "vue";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";
import firebase from "firebase";

import routes from "./routes";

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
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    let guestOnly = to.matched.some(record => record.meta.guestOnly);

    if (requiresAuth && !currentUser) next("login");
    else if (guestOnly && currentUser) next("/");
    else next();
  });

  if (process.env.NODE_ENV === production) {
    Vue.use(
      VueGtag,
      {
        config: { id: "G-CP4BWHTE8R" },
        appName: "proto-dev",
        pageTrackerScreenviewEnabled: true
      },
      Router
    );
  }

  return Router;
}
