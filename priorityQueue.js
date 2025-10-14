/**
 * Priority Queue implementation
 * Created: October 14, 2025
 */

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  /**
   * Add item with priority
   * @param {*} item - Item to add
   * @param {number} priority - Priority (lower = higher priority)
   */
  enqueue(item, priority) {
    const queueElement = { item, priority };
    let added = false;
    
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    
    if (!added) {
      this.items.push(queueElement);
    }
  }

  /**
   * Remove and return highest priority item
   * @returns {*} Highest priority item
   */
  dequeue() {
    return this.items.shift().item;
  }

  /**
   * Check if queue is empty
   * @returns {boolean} True if empty
   */
  isEmpty() {
    return this.items.length === 0;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PriorityQueue;
}

