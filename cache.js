/**
 * Simple cache implementation
 * Created: October 13, 2025
 */

class Cache {
  constructor(maxSize = 100, ttl = null) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.ttl = ttl; // Time to live in milliseconds
  }

  /**
   * Set a value in cache
   * @param {string} key - Cache key
   * @param {*} value - Value to cache
   */
  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    const entry = {
      value,
      timestamp: Date.now()
    };
    
    this.cache.set(key, entry);
  }

  /**
   * Get a value from cache
   * @param {string} key - Cache key
   * @returns {*} Cached value or null
   */
  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (this.ttl && Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.value;
  }

  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear();
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Cache;
}

