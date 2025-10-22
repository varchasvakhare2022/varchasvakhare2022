/**
 * Color utility functions
 * Created: October 22, 2025
 */

/**
 * Convert RGB to HEX
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {string} HEX color code
 */
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

/**
 * Convert HEX to RGB
 * @param {string} hex - HEX color code
 * @returns {Object} RGB object
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Lighten a color
 * @param {string} hex - HEX color code
 * @param {number} percent - Lighten percentage (0-100)
 * @returns {string} Lightened HEX color
 */
function lighten(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const r = Math.min(255, rgb.r + (255 - rgb.r) * percent / 100);
  const g = Math.min(255, rgb.g + (255 - rgb.g) * percent / 100);
  const b = Math.min(255, rgb.b + (255 - rgb.b) * percent / 100);
  
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    rgbToHex,
    hexToRgb,
    lighten
  };
}

