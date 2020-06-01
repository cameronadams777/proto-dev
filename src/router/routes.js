const routes = [
  {
    path: "/",
    component: () => import("layouts/main-layout.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      {
        path: "/login",
        component: () => import("pages/login.vue"),
        meta: { guest: true }
      },
      {
        path: "/register",
        component: () => import("pages/register.vue"),
        meta: { guest: true }
      },
      {
        path: "/profile",
        component: () => import("pages/profile.vue"),
        meta: { requiresAuth: true }
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/404.vue")
  });
}

export default routes;
