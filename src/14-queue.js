const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.qsize = 0;
  }

  get size() {
    return this.qsize;
  }

  enqueue(element) {
    const el = new ListNode(element);
    if (!this.tail) {
      this.tail = el;
      this.head = el;
    } else {
      this.tail.next = el;
      this.tail = el;
    }
    this.qsize += 1;
  }

  dequeue() {
    if (!this.head) return null;
    const val = this.head.value;
    this.head = this.head.next;
    this.qsize -= 1;
    return val;
  }
}

module.exports = Queue;
