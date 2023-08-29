import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";
import SignIn from "./pages/SignIn.vue";
import Login from "./pages/Login.vue";
import Profile from "./pages/Profile.vue";
import Settings from "./pages/Settings.vue";
import CreateEditArticle from "./pages/CreateEditArticle.vue";
import Article from "./pages/Article.vue";

export const routes: RouteRecordRaw[] = [
  { name: "global-feed", path: "/", component: Home },
  { name: "register", path: "/register", component: SignIn },
  { name: "login", path: "/login", component: Login },
  { name: "profile", path: "/profile/eric-simons", component: Profile },
  { name: "settings", path: "/settings", component: Settings },
  { name: "create-edit", path: "/editor", component: CreateEditArticle },
  {
    name: "article",
    path: "/article/:slug",
    component: Article,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
