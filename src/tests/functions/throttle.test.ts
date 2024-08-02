import { throttle } from "../../";

describe("throttle", () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should invoke the function at most once per specified interval", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Call the throttled function multiple times
    throttledFunc();
    throttledFunc();
    throttledFunc();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Ensure the function was called only once
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should invoke the function immediately and then after the specified interval", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Call the throttled function
    throttledFunc();

    // Fast-forward time by 500ms (shouldn't call the function yet)
    jest.advanceTimersByTime(500);

    // Call the throttled function again
    throttledFunc();

    // Fast-forward time by another 500ms (total 1000ms since the last call)
    jest.advanceTimersByTime(500);

    // Ensure the function was called twice
    expect(func).toHaveBeenCalledTimes(2);
  });

  it("should handle multiple throttled function calls correctly", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Call the throttled function several times
    throttledFunc();
    throttledFunc();
    throttledFunc();

    // Fast-forward time by 2000ms to allow all function calls
    jest.advanceTimersByTime(2000);

    // Ensure the function was called only twice (initial call + call after 1000ms)
    expect(func).toHaveBeenCalledTimes(2);
  });
});
