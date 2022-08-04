const DiscoverMusic = () => import("../../pages/login/index.vue");
const normalRoutes = {
  path: "/discoverMusic",
  name: "discoverMusic",
  redirect: "/discoverMusic/recommend",
  meta: {
    title: "发现音乐",
    icon: "Music",
  },
  children: [
    {
      path: "recommend",
      name: "recommend",
      component: () => import("../../pages/DiscoverMusic/recommend/index.vue"),
      meta: {
        title: "个性推荐",
      },
    },
    {
      path: "playList",
      name: "playList",
      component: () => import("../../pages/DiscoverMusic/playList/index.vue"),
      meta: {
        title: "歌单",
      },
    },
  ],
};

export default normalRoutes;
