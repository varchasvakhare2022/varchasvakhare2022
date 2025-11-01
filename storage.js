/**
 * Local storage utility functions
 * Created: November 1, 2025
 */

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
function saveToStorage(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('Error saving to storage:', error);
    return false;
  }
}

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Stored value or default
 */
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    return JSON.parse(item);
  } catch (error) {
    console.error('Error reading from storage:', error);
    return defaultValue;
  }
}

/**
 * Remove data from localStorage
 * @param {string} key - Storage key
 */
function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from storage:', error);
    return false;
  }
}

/**
 * Clear all localStorage data
 */
function clearStorage() {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing storage:', error);
    return false;
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    saveToStorage,
    getFromStorage,
    removeFromStorage,
    clearStorage
  };
}

