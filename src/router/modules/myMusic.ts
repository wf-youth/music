const musicRoutes = {
  path: "/music",
  redirect: "/music/favorite",
  meta: {
    title: "我的音乐",
  },
  children: [
    {
      path: "/favorite",
      name: "Favorite",
      component: () => import("../../pages/Favorite/index.vue"),
      meta: {
        title: "我的收藏",
        icon: "star",
      },
    },
  ],
};

export default musicRoutes;
