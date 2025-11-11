/**
 * Configuration settings
 * Created: November 11, 2025
 */

const config = {
  appName: 'MyApp',
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  timeout: 5000,
  retries: 3
};

/**
 * Get configuration value by key
 * @param {string} key - Configuration key
 * @returns {*} Configuration value
 */
function getConfig(key) {
  return config[key];
}

/**
 * Update configuration value
 * @param {string} key - Configuration key
 * @param {*} value - New value
 */
function setConfig(key, value) {
  config[key] = value;
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    config,
    getConfig,
    setConfig
  };
}

