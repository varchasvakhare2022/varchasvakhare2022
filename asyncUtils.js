/**
 * Async utility functions
 * Created: October 18, 2025
 */

/**
 * Execute promises in parallel with concurrency limit
 * @param {Array} tasks - Array of functions that return promises
 * @param {number} limit - Maximum concurrent executions
 * @returns {Promise} Promise resolving to array of results
 */
async function parallelLimit(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const task of tasks) {
    const promise = Promise.resolve(task()).then(result => {
      executing.splice(executing.indexOf(promise), 1);
      return result;
    });
    
    results.push(promise);
    executing.push(promise);
    
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}

/**
 * Execute promises sequentially
 * @param {Array} tasks - Array of functions that return promises
 * @returns {Promise} Promise resolving to array of results
 */
async function sequential(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parallelLimit,
    sequential
  };
}

