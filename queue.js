/**
 * Queue data structure implementation
 * Created: October 13, 2025
 */

class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Add item to the queue
   * @param {*} item - Item to enqueue
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * Remove and return front item
   * @returns {*} Front item
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Get front item without removing
   * @returns {*} Front item
   */
  front() {
    return this.items[0];
  }

  /**
   * Check if queue is empty
   * @returns {boolean} True if empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Get queue size
   * @returns {number} Queue size
   */
  size() {
    return this.items.length;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}

