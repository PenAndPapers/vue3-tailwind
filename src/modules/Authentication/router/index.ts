export default [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: (): unknown =>
      import(/* webpackChunkName: "Login" */ "../views/Login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "Register",
    },
    component: (): unknown =>
      import(/* webpackChunkName: "Register" */ "../views/Register/index.vue"),
  },
  {
    path: "/update-password",
    name: "UpdatePassword",
    meta: {
      title: "Update Password",
    },
    component: (): unknown =>
      import(/* webpackChunkName: "UpdatePassword" */ "../views/UpdatePassword/index.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    meta: {
      title: "ForgotPassword",
    },
    component: (): unknown =>
      import(/* webpackChunkName: "ForgotPassword" */ "../views/ForgotPassword/index.vue"),
  }
];
