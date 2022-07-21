/**
 * 判断左右括号是否匹配
 * 括号匹配  栈-先进后出
 * */ 
function isMatch(left: string, right:string): boolean {
  if (left === '{' && right === '}') { return true }
  if (left === '[' && right === ']') { return true }
  if (left === '(' && right === ')') { return true }
  return false
}
/**
 * 时间复杂度 o(n)
 * 空间复杂度 o(n)
 * */ 
export function matchBracket (str:string):boolean {
  const length = str.length;
  if (length === 0) return true;
  const stack = []; // o(n)
  const leftSymbols = '{[(';
  const rightSymbols = '}])';
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (leftSymbols.includes(s)) {
      stack.push(s)
    } 
    // o(1) 因为rightSymbols 是常量与输入的str没有关系 不能体现复杂度
    if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
 return stack.length === 0
}

// // 功能测试
// const str = '{wdwqeqw}a(bsdfsf[c]d)e}fweewre'
// console.info(matchBracket(str))
