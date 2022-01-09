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
export const randomStr = (len: number = 11) => {
  let result = ''
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charsLen = chars.length
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLen))
  }
  return result
}
