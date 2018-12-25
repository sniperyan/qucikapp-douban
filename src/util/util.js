
/**
 * 读取 undefined 上的属性检查，防止出错
 * @param  {...any} args 
 */
function checkEmpty(...args) {
  let ret
  if (args.length > 0) {
    ret = args.shift()
    let tmp
    while (ret && args.length > 0) {
      tmp = args.shift()
      ret = ret[tmp]
    }
  }
  return ret || ''
}

export {
  checkEmpty
}
