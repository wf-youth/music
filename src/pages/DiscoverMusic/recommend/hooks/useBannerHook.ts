import { ref } from "vue";
import { banner_api, Banner } from "@/api/DiscoverMusic/recommend";

export const useBannerHook = () => {
  const images = ref<Banner[]>([]);

  async function getBanners() {
    const { banners } = await banner_api({
      type: 0,
    });

    images.value = banners;
  }

  return {
    images,
    getBanners,
  };
};
