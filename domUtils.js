/**
 * DOM utility functions
 * Created: October 20, 2025
 */

/**
 * Wait for element to appear in DOM
 * @param {string} selector - CSS selector
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<Element>} Promise resolving to element
 */
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error('Element not found'));
    }, timeout);
  });
}

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector
 */
function smoothScrollTo(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    waitForElement,
    smoothScrollTo
  };
}

