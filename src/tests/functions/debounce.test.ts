import { debounce } from "../../";

describe("debounce", () => {
  jest.useFakeTimers();

  it("should call the function after the specified delay", () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 300);

    // Call the debounced function multiple times
    debouncedCallback();
    debouncedCallback();
    debouncedCallback();

    // Fast-forward time by 300ms
    jest.advanceTimersByTime(300);

    // Expect the callback to be called once after 300ms
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call the function before the specified delay", () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 500);

    // Call the debounced function multiple times
    debouncedCallback();
    debouncedCallback();

    // Fast-forward time by 300ms
    jest.advanceTimersByTime(300);

    // Expect the callback to have not been called yet
    expect(callback).not.toHaveBeenCalled();
  });

  it("should correctly handle multiple calls", () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 200);

    // Call the debounced function multiple times
    debouncedCallback();
    debouncedCallback();
    debouncedCallback();

    // Fast-forward time by 100ms
    jest.advanceTimersByTime(100);

    // Expect the callback to have not been called yet
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward time by another 100ms
    jest.advanceTimersByTime(100);

    // Expect the callback to have been called once after the total delay
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
