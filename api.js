/**
 * API utility functions
 * Created: November 11, 2025
 */

/**
 * Makes a GET request
 * @param {string} url - API endpoint URL
 * @param {Object} options - Request options
 * @returns {Promise} Promise resolving to response data
 */
async function get(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    return await response.json();
  } catch (error) {
    throw new Error(`GET request failed: ${error.message}`);
  }
}

/**
 * Makes a POST request
 * @param {string} url - API endpoint URL
 * @param {Object} data - Data to send
 * @param {Object} options - Request options
 * @returns {Promise} Promise resolving to response data
 */
async function post(url, data, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data),
      ...options
    });
    return await response.json();
  } catch (error) {
    throw new Error(`POST request failed: ${error.message}`);
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    get,
    post
  };
}

