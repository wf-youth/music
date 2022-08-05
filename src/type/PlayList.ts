export interface PlayListObject {
  hasTaste: boolean;
  code: number;
  category: number;
  result: PlayList[];
}

export interface PlayList {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}
