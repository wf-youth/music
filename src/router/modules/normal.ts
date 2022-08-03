const DiscoverMusic = () => import("../../pages/login/index.vue");
const normalRoutes = {
  path: "/",
  redirect: "/DiscoverMusic",

  children: [
    {
      path: "/DiscoverMusic",
      name: "DiscoverMusic",
      component: () => import("../../pages/DiscoverMusic/index.vue"),
      meta: {
        title: "发现音乐",
        icon: "Music",
      },
    },
  ],
};

export default normalRoutes;
