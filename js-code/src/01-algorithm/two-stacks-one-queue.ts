/**
 * 两个栈 一个队列
 * */ 

// 队列  先进先出
// 栈    先进后出
export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  /**
   * 入队
   * */ 
  add(n:number) {
    this.stack1.push(n)
  }

  /**
   * 出栈
   * */ 
  delete(): number | null {
    while (this.stack1.length) {
      const n = this.stack1.pop()
      if (n != null) {
        this.stack2.push(n)
      }
    }
    const d = this.stack2.pop()
    while (this.stack2.length) {
      const n = this.stack2.pop()
      if (n != null) {
        this.stack1.push(n)
      }
    }
    return d || null;
  }

  get length(): number {
    return this.stack1.length
  }
}

const q = new MyQueue()
q.add(1)
q.add(2)
console.log(q.length)

console.log(q.delete())
console.log(q.length)