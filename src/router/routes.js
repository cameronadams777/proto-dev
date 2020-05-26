const routes = [
  {
    path: "/",
    component: () => import("layouts/main-layout.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      { path: "/login", component: () => import("pages/login.vue") },
      { path: "/register", component: () => import("pages/register.vue") },
      { path: "/profile", component: () => import("pages/profile.vue") }
    ]
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/404.vue")
  });
}

export default routes;
