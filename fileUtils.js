/**
 * File utility functions
 * Created: October 23, 2025
 */

/**
 * Read file as text
 * @param {File} file - File object
 * @returns {Promise<string>} Promise resolving to file content
 */
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

/**
 * Read file as data URL
 * @param {File} file - File object
 * @returns {Promise<string>} Promise resolving to data URL
 */
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Download data as file
 * @param {string} data - Data to download
 * @param {string} filename - Filename
 * @param {string} mimeType - MIME type
 */
function downloadFile(data, filename, mimeType = 'text/plain') {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    readFileAsText,
    readFileAsDataURL,
    downloadFile
  };
}

