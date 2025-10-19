/**
 * URL utility functions
 * Created: October 19, 2025
 */

/**
 * Parse query string into object
 * @param {string} queryString - Query string
 * @returns {Object} Parsed query parameters
 */
function parseQueryString(queryString) {
  const params = {};
  const searchParams = new URLSearchParams(queryString);
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
}

/**
 * Build query string from object
 * @param {Object} params - Parameters object
 * @returns {string} Query string
 */
function buildQueryString(params) {
  return new URLSearchParams(params).toString();
}

/**
 * Get domain from URL
 * @param {string} url - URL string
 * @returns {string} Domain name
 */
function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parseQueryString,
    buildQueryString,
    getDomain
  };
}

