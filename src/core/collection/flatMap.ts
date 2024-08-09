/**
 * A function that maps each element using a mapping function and then flattens the result.
 *
 * @param array The array to iterate over.
 * @param iteratee The function to map over each element.
 * @returns A new array with the results of applying the iteratee function and flattening.
 */
function flatMap<T, U>(array: T[], iteratee: (item: T) => U[]): U[] {
  // Map each item to an array and then flatten the result
  return array.reduce<U[]>((accumulator, item) => {
    return accumulator.concat(iteratee(item));
  }, []);
}

export { flatMap };
