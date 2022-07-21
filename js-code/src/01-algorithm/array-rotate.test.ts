import {  route1, route2 } from './array-rotate'
describe('数组旋转', () => {
  it('正常情况', () => {
    const arr = [1,2,3,4,5,6,7];
    const k = 3;
    const res = route1(arr, k);
    expect(res).toEqual([5,6,7,1,2,3,4]);
  })

  it('数组为空', () => {
    const res = route1([], 3);
    expect(res).toEqual([]);
  })

  it('k 是负值', () => {
    const arr = [1,2,3,4,5,6,7];
    const k = -3;
    const res = route2(arr, k);
    expect(res).toEqual([5,6,7,1,2,3,4]);
  })

  it('k 不是数字', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 'uiui';
    // @ts-ignore
    const res = route1(arr, k);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7]);
  })
})