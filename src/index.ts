import { isFunc } from 'ginlibs-type-check'

export const compose = (...args: AnyFunction[]) => {
  const funcs = args.reverse()
  let result: any = void 0
  return function (arg) {
    result = arg
    for (const it of funcs) {
      if (!isFunc(it)) {
        continue
      }
      result = it(result)
    }
    return result
  }
}

export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
export const randomStr = (len: number = 23) => {
  let str = Math.random().toString(36).substring(2, 15)
  while (str.length < len) {
    str += Math.random().toString(36).substring(2, 15)
  }
  return str.slice(0, len)
}
