/**
 *反转单向链表
 * */ 
export interface ILinkListNode {
  value: number,
  next?: ILinkListNode
}
/***
 *        A   B   C   D   E   F   G
 *  p  c  n
 *     p  c   n
 *        p   c   n
 *            p   c   n
 *                p   c   n
 *                    p   c   n
 *                        p   c   n
 *                            p   c   n
 * 反转单向链表、并返回反转之后的 head node
 * @param listNode  list head node
 * */ 
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  // 定义三个指针
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode
  while (nextNode) {
    // 第一个元素,删掉next,防止循环饮用
    if (curNode && !prevNode){
      delete curNode.next
    }
    // 反转指针
    if(curNode && prevNode) {
       curNode.next = prevNode
    }
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }
  // 当nextNode 为空时，此时curNode尚未设置next
  curNode!.next = prevNode
  return curNode!
}

/**
 * 根据数组创建单项链表
 * */ 
export function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length;
  if (length === 0) throw new Error('arr is empty')
  let curNode: ILinkListNode = {
    value: arr[arr.length - 1]
  }
  if (length === 1) return curNode
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
 } 

//  const arr = [100,200,300,400,500]
//  const list = createLinkList(arr)
//  console.log(JSON.parse(JSON.stringify(list)))
// console.log(reverseLinkList(list))
