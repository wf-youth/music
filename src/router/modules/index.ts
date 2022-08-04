import { RouteRecordRaw } from "vue-router";
import normalRoutes from "./normal";
import musicRoutes from "./myMusic";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/discoverMusic" },
  normalRoutes,
  musicRoutes,
];
