// /**
//  * Deeply merges two or more objects.
//  *
//  * @param target - The target object that will be merged into.
//  * @param sources - One or more source objects to merge into the target.
//  * @returns The deeply merged target object.
//  *
//  * @example
//  * ```
//  * const obj1 = { a: 1, b: { x: 1 } };
//  * const obj2 = { b: { y: 2 }, c: 3 };
//  * const result = merge(obj1, obj2);
//  * // => { a: 1, b: { x: 1, y: 2 }, c: 3 }
//  * ```
//  */
// function merge<T extends Record<string, any>>(target: T, ...sources: T[]): T {
//   const output = { ...target }; // Create a new object to avoid mutating the target

//   sources.forEach((source) => {
//     if (source && typeof source === "object") {
//       Object.keys(source).forEach((key) => {
//         const targetValue = output[key];
//         const sourceValue = source[key];

//         if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
//           (output as Record<string, any>)[key] = [
//             ...targetValue,
//             ...sourceValue,
//           ];
//         } else if (sourceValue && typeof sourceValue === "object") {
//           (output as Record<string, any>)[key] = merge(
//             targetValue && typeof targetValue === "object" ? targetValue : {},
//             sourceValue,
//           );
//         } else {
//           (output as Record<string, any>)[key] = sourceValue;
//         }
//       });
//     }
//   });

//   return output;
// }

// export { merge };
