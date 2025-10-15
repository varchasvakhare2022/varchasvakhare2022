/**
 * Binary search algorithm
 * Created: October 15, 2025
 */

/**
 * Binary search in sorted array
 * @param {Array} arr - Sorted array
 * @param {*} target - Target value
 * @returns {number} Index of target or -1 if not found
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * Binary search recursive implementation
 * @param {Array} arr - Sorted array
 * @param {*} target - Target value
 * @param {number} left - Left index
 * @param {number} right - Right index
 * @returns {number} Index of target or -1 if not found
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    binarySearch,
    binarySearchRecursive
  };
}

