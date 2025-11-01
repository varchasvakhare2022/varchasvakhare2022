/**
 * Logging utility
 * Created: November 1, 2025
 */

const logLevels = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

let currentLogLevel = logLevels.INFO;

/**
 * Set the current log level
 * @param {string} level - Log level (DEBUG, INFO, WARN, ERROR)
 */
function setLogLevel(level) {
  currentLogLevel = logLevels[level.toUpperCase()] || logLevels.INFO;
}

/**
 * Log a debug message
 * @param {string} message - Message to log
 */
function debug(message) {
  if (currentLogLevel <= logLevels.DEBUG) {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }
}

/**
 * Log an info message
 * @param {string} message - Message to log
 */
function info(message) {
  if (currentLogLevel <= logLevels.INFO) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }
}

/**
 * Log a warning message
 * @param {string} message - Message to log
 */
function warn(message) {
  if (currentLogLevel <= logLevels.WARN) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }
}

/**
 * Log an error message
 * @param {string} message - Message to log
 */
function error(message) {
  if (currentLogLevel <= logLevels.ERROR) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    setLogLevel,
    debug,
    info,
    warn,
    error,
    logLevels
  };
}

