export function unique(list: any[], name: string): any[] {
  let obj: any = {}
  let result = list.reduce((cur, next) => {
    obj[next[name]] ? '' : (obj[next[name]] = true && cur.push(next))
    return cur
  }, []) //设置cur默认类型为数组，并且初始值为空的数组

  return result
}
