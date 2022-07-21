/***
 * 括号匹配 test
 * */ 
import { matchBracket } from './match-bracket'
describe('括号匹配', () => {
  it('正常情况', () => {
    const str = '{}';
    const res = matchBracket(str);
    expect(res).toBe(true)
  })
  it('不匹配情况', () => {
    const str = '{a(b[c]d]e}fw';
    const res = matchBracket(str);
    expect(res).toBe(false)
  })
  it('顺序不一致的', () => {
    const str = '{a(b[c]d}e)';
    const res = matchBracket(str);
    expect(res).toBe(false)
  })
})