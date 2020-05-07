import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-ua'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Vue.use(VueAnalytics, {
    appName: 'proto-dev', // Mandatory
    appVersion: "1.2.1", // Mandatory
    trackingId: process.env.MEASUREMENT_ID, // Mandatory
    debug: process.env.NODE_ENV !== 'production', // Whether or not display console logs debugs (optional)
    vueRouter: Router, // Pass the router instance to automatically sync with router (optional)
    ignoredViews: [], // If router, you can exclude some routes name (case insensitive) (optional)
  });

  return Router
}
