type QNode<T> = {
  value: T;
  next?: QNode<T>;
};
class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }
  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
    }
    this.tail.next = node;
    this.tail = node;
  }
  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
