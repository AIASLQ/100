/**
 * 用链表实现队列
 * */ 

interface IListNode {
  value: number,
  next: IListNode | null
}

export class MyQueue {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0


  /***
   * 入队， 从tail位置(队尾入队)
   * */ 
  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null
    }

    // 处理head 注意默认初始情况
    if (this.head === null) {
      this.head = newNode
    }





  }
}