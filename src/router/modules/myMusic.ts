const musicRoutes = {
  path: "/favorite",
  name: "Favorite",
  redirect: "/favorite/artist",
  meta: {
    title: "我的收藏",
    icon: "Star",
    cateName: "我的音乐",
  },
  children: [
    {
      path: "/favorite/artist",
      name: "Favorite",
      component: () => import("../../pages/Favorite/artist/index.vue"),
      meta: {
        title: "歌手",
      },
    },
  ],
};

export default musicRoutes;
