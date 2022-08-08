import { get } from "@/utils/http/axios";
import type { PlayListObject } from "@/type/index";

export const personalized_api = (limit: number): Promise<PlayListObject> => {
  return get({
    url: "/personalized",
    params: {
      limit,
    },
  });
};
