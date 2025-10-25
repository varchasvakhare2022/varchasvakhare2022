/**
 * Time utility functions
 * Created: October 25, 2025
 */

/**
 * Format time duration in milliseconds to human readable
 * @param {number} ms - Milliseconds
 * @returns {string} Formatted duration
 */
function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

/**
 * Get time ago string
 * @param {Date} date - Date to compare
 * @returns {string} Time ago string
 */
function timeAgo(date) {
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 365) return `${Math.floor(days / 365)} years ago`;
  if (days > 30) return `${Math.floor(days / 30)} months ago`;
  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  return 'just now';
}

/**
 * Sleep for specified milliseconds
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise} Promise that resolves after sleep
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    formatDuration,
    timeAgo,
    sleep
  };
}

