// 获取视频第一帧
export function useVideoPoster(url: string) {
  if (url.indexOf('?') != -1) {
    url = url.split('?')[0]
  }
  return (url = url + '?x-oss-process=video/snapshot,t_1,m_fast')
}
