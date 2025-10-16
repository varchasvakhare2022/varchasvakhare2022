/**
 * Linked List implementation
 * Created: October 16, 2025
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Add node to the end
   * @param {*} value - Value to add
   */
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  /**
   * Remove node by value
   * @param {*} value - Value to remove
   * @returns {boolean} True if removed
   */
  remove(value) {
    if (!this.head) return false;
    
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return true;
      }
      current = current.next;
    }
    
    return false;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LinkedList, Node };
}

