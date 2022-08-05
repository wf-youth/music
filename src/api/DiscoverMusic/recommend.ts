import { get } from "@/utils/http/axios";
import { BannerObject } from "./type";
export type { Banner } from "./type";

interface BannerParams {
  type: number;
}

export const banner_api = (params: BannerParams): Promise<BannerObject> => {
  return get({
    url: "/banner",
    params,
  });
};
