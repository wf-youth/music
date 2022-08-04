import { RouteRecordRaw } from "vue-router";
import normalRoutes from "./normal";
import musicRoutes from "./myMusic";

interface Meta {
  icon?: string;
  title: string;
}

type Routes = RouteRecordRaw & {
  meta?: Meta;
  children?: {
    meta?: Meta;
  };
};

export const routes: Routes[] = [
  { path: "/", redirect: "/discoverMusic" },
  normalRoutes,
  musicRoutes,
];
