import { get } from "@/utils/http/axios";
import type { PlayListObject } from "@/type/index";

export const personalized_api = (): Promise<PlayListObject> => {
  return get({
    url: "/personalized?limit=30",
  });
};
