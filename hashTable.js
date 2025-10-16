/**
 * Hash Table implementation
 * Created: October 16, 2025
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Hash function
   * @param {string} key - Key to hash
   * @returns {number} Hash index
   */
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Set a key-value pair
   * @param {string} key - Key
   * @param {*} value - Value
   */
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /**
   * Get value by key
   * @param {string} key - Key
   * @returns {*} Value or undefined
   */
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HashTable;
}

