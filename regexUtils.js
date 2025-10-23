/**
 * Regular expression utility functions
 * Created: October 23, 2025
 */

/**
 * Common regex patterns
 */
const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]+$/,
  url: /^https?:\/\/.+/,
  ip: /^(\d{1,3}\.){3}\d{1,3}$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
};

/**
 * Test if string matches pattern
 * @param {string} str - String to test
 * @param {string} patternName - Pattern name
 * @returns {boolean} True if matches
 */
function testPattern(str, patternName) {
  const pattern = patterns[patternName];
  return pattern ? pattern.test(str) : false;
}

/**
 * Extract matches from string
 * @param {string} str - String to search
 * @param {RegExp} regex - Regular expression
 * @returns {Array} Array of matches
 */
function extractMatches(str, regex) {
  const matches = [];
  let match;
  while ((match = regex.exec(str)) !== null) {
    matches.push(match[0]);
  }
  return matches;
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    patterns,
    testPattern,
    extractMatches
  };
}

