 /**
 * 旋转数组 k 步  使用pop 和 unshift
 * 时间复杂度 o(n^2)
 * 空间复杂度 o(1)
 * */ 
export function route1(arr:number[], k:number): number[] {
  const length = arr.length;
  if (!k || !length) {
    return arr
  }
  // abs 取绝对值
  // k % length 防止k为负数或者k大于length
  const step = Math.abs(k % length)
  for (let i = 0; i < step; i++) {
    // o(n)
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n); // 数组是一个有序 结构，unshift、shift、splice 操作非常慢!!
      // o(n)
    }
  }
  return arr
}

/***
 * 旋转数组  k 步 使用concat
 * 时间复杂度 o(1)
 * 空间复杂度 o(n)
 * */ 
export function route2 (arr:number[], k:number): number[] {
  const length = arr.length;
  if (!k || !length) {
    return arr
  }
  // abs 取绝对值
  // k % length 防止k为负数或者k大于length
  const step = Math.abs(k % length)
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step)
  return part1.concat(part2);
}


// 性能测试

// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//   arr1.push(i)
// }
// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//   arr2.push(i)
// }
// console.time('rotate1')
// route1(arr1, 9 * 10000) // 4272ms
// console.timeEnd('rotate1')

// console.time('rotate2')
// route2(arr2, 9 * 10000) // 1ms
// console.timeEnd('rotate2')