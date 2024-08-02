/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 *
 * @param func - The function to throttle.
 * @param wait - The number of milliseconds to wait before allowing the next invocation.
 * @returns The new throttled function.
 */
function throttle<F extends (...args: unknown[]) => void>(
  func: F,
  wait: number,
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<F> | null = null;

  const later = function (this: unknown) {
    if (lastArgs) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timeout = setTimeout(later.bind(this), wait);
    } else {
      timeout = null;
    }
  };

  return function (this: unknown, ...args: Parameters<F>) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(later.bind(this), wait);
    } else {
      lastArgs = args;
    }
  };
}

export { throttle };
