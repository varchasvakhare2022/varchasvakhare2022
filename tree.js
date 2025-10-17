/**
 * Binary Tree implementation
 * Created: October 17, 2025
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert a value into the tree
   * @param {*} value - Value to insert
   */
  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  /**
   * Search for a value in the tree
   * @param {*} value - Value to search
   * @returns {boolean} True if found
   */
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BinaryTree, TreeNode };
}

