/** common uses
 - copying an array: creates a copy of an existing
This ensures that modifications to the new array do not affect the original array.
 */

const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]

/** Merging arrays
 * combines multiple arrays into one without using methods like concat()
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

/** Passing Arguments t functions:
 * Unpacks an array to pass its values as seprate arguents to a function.
 */

const nums = [5, 10, 2];
const max = Math.max(...nums); // evaluates as math.max(5,10,2) 10

/** Adding elements
 * Easily adds elements to the beginning, middle or end of a new array
 */

const items = [2, 3];
const newItems = [1, ...items, 4]; // [1, 2, 3, 4]