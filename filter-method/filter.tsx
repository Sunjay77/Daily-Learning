/** Syntax
 * filter(callbackFn)
 * filter(callbackFn, thisArg)
 * element: The current item being processed.
 * index (Optional): The index of the current element.
 * array (Optional): The original array the method was called on.
 * thisArg (Optional): A value to use as this when executing the callback. 
 */

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
