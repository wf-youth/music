import { ref } from "vue";
import { personalized_api } from "@/api/DiscoverMusic/playList";
import type { PlayList } from "@/type/index";

export const usePersonalizedHook = () => {
  const playList = ref<PlayList>([]);

  async function getPlayList() {
    const { result } = await personalized_api();
    playList.value = result;
  }

  return {
    playList,
    getPlayList,
  };
};
