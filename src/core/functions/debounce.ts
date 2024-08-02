/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} - The new debounced function.
 */
function debounce<F extends (...args: unknown[]) => void>(
  func: F,
  wait: number,
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout | undefined;

  return function (this: unknown, ...args: Parameters<F>) {
    // Clear the previous timeout
    if (timeout) {
      clearTimeout(timeout);
    }

    // Set a new timeout to invoke the function after the wait period
    timeout = setTimeout(() => {
      func.apply(this as unknown, args);
    }, wait);
  };
}

export { debounce };
