/**
 * Stack data structure implementation
 * Created: October 14, 2025
 */

class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Add item to the stack
   * @param {*} item - Item to push
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Remove and return top item
   * @returns {*} Top item
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Get top item without removing
   * @returns {*} Top item
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Check if stack is empty
   * @returns {boolean} True if empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Get stack size
   * @returns {number} Stack size
   */
  size() {
    return this.items.length;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}

