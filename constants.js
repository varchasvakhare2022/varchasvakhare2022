/**
 * Application constants
 * Created: October 26, 2025
 */

/**
 * HTTP status codes
 */
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

/**
 * Common MIME types
 */
const MIME_TYPES = {
  JSON: 'application/json',
  HTML: 'text/html',
  CSS: 'text/css',
  JS: 'application/javascript',
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  PDF: 'application/pdf'
};

/**
 * Common regex patterns
 */
const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/.+/,
  PHONE: /^[\d\s\-\+\(\)]+$/
};

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HTTP_STATUS,
    MIME_TYPES,
    REGEX_PATTERNS
  };
}

