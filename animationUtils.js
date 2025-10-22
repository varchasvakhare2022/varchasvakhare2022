/**
 * Animation utility functions
 * Created: October 22, 2025
 */

/**
 * Easing functions for animations
 */
const easing = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
};

/**
 * Animate a value over time
 * @param {Function} callback - Callback with current value
 * @param {number} from - Start value
 * @param {number} to - End value
 * @param {number} duration - Duration in milliseconds
 * @param {Function} easingFn - Easing function
 * @returns {Promise} Promise that resolves when animation completes
 */
function animate(callback, from, to, duration = 1000, easingFn = easing.linear) {
  return new Promise(resolve => {
    const startTime = performance.now();
    const change = to - from;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easingFn(progress);
      const current = from + change * eased;

      callback(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(update);
  });
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    animate,
    easing
  };
}

