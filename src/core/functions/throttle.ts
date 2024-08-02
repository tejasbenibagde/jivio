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
  let lastCall = 0;
  let timeout: NodeJS.Timeout | undefined;

  return function (this: unknown, ...args: Parameters<F>) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (timeout) {
      clearTimeout(timeout);
    }

    if (remaining <= 0) {
      lastCall = now;
      func.apply(this, args);
    } else {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        func.apply(this, args);
      }, remaining);
    }
  };
}

export { throttle };
