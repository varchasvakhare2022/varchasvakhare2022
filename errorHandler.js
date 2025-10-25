/**
 * Error handling utilities
 * Created: October 25, 2025
 */

/**
 * Error handler class
 */
class ErrorHandler {
  constructor() {
    this.listeners = [];
  }

  /**
   * Add error listener
   * @param {Function} listener - Error listener function
   */
  onError(listener) {
    this.listeners.push(listener);
  }

  /**
   * Handle an error
   * @param {Error} error - Error to handle
   */
  handle(error) {
    console.error('Error:', error);
    this.listeners.forEach(listener => {
      try {
        listener(error);
      } catch (e) {
        console.error('Error in error listener:', e);
      }
    });
  }
}

/**
 * Wrap async function with error handling
 * @param {Function} fn - Async function to wrap
 * @returns {Function} Wrapped function
 */
function withErrorHandling(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error('Unhandled error:', error);
      throw error;
    }
  };
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ErrorHandler,
    withErrorHandling
  };
}

