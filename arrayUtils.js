/**
 * Array utility functions
 * Created: November 2, 2025
 */

/**
 * Remove duplicates from an array
 * @param {Array} arr - Array to process
 * @returns {Array} Array without duplicates
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Shuffle an array
 * @param {Array} arr - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Chunk an array into smaller arrays
 * @param {Array} arr - Array to chunk
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 */
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Get random item from array
 * @param {Array} arr - Array to pick from
 * @returns {*} Random item
 */
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unique,
    shuffle,
    chunk,
    randomItem
  };
}

