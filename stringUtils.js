/**
 * String utility functions
 * Created: November 4, 2025
 */

/**
 * Convert string to camelCase
 * @param {string} str - String to convert
 * @returns {string} Camel case string
 */
function toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

/**
 * Convert string to kebab-case
 * @param {string} str - String to convert
 * @returns {string} Kebab case string
 */
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/[\s_]+/g, '-')
            .toLowerCase();
}

/**
 * Convert string to snake_case
 * @param {string} str - String to convert
 * @returns {string} Snake case string
 */
function toSnakeCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/[\s-]+/g, '_')
            .toLowerCase();
}

/**
 * Remove HTML tags from string
 * @param {string} str - String with HTML
 * @returns {string} String without HTML tags
 */
function stripHTML(str) {
  return str.replace(/<[^>]*>/g, '');
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toCamelCase,
    toKebabCase,
    toSnakeCase,
    stripHTML
  };
}

