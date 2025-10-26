/**
 * Main entry point - exports all utilities
 * Created: October 26, 2025
 */

// This file serves as a central export point for all utility modules
// Import and re-export all utilities here for easier access

// Note: In a real project, you would use actual imports like:
// export * from './utils';
// export * from './helpers';
// etc.

console.log('Utility library loaded');

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    message: 'Utility library - import individual modules as needed'
  };
}

