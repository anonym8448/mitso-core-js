/**
 * Returns an index of the specified element in array or -1 if element is not found
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 */
function generateOdds(len) {
  return Array.from({ length: len }, (unused, i) => i * 2 + 1);
}

/**
 * Returns the doubled array - elements are repeated twice
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Returns an array of positive numbers from the specified array
 */
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}

/**
 * Returns the array with strings only
 */
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

/**
 * Removes falsy values from the specified array
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns the array of uppercase strings
 */
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}

/**
 * Returns the array of string lengths
 */
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

/**
 * Inserts the item into specified array at specified index
 */
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}

/**
 * Returns the n first items of the specified array
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns CSV representation of two-dimensional numeric array
 */
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

/**
 * Transforms the numeric array into the array of squares
 */
function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}

/**
 * Transforms the numeric array to the moving sum array
 */
function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
}

/**
 * Returns every second item from the specified array
 */
function getSecondItems(arr) {
  return arr.filter((unused, idx) => idx % 2 === 1);
}

/**
 * Propagates every item in sequence its position times
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, i) => Array(i + 1).fill(item));
}

/**
 * Returns the 3 largest numbers from the specified array
 */
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

/**
 * Returns the number of positive numbers from specified array
 */
function getPositivesCount(arr) {
  return arr.filter((x) => typeof x === 'number' && x > 0).length;
}

/**
 * Sorts digit names by numeric order
 */
function sortDigitNamesByNumericOrder(arr) {
  const order = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

/**
 * Returns the sum of all items in the specified array
 */
function getItemsSum(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
}

/**
 * Returns the number of all falsy values in the specified array
 */
function getFalsyValuesCount(arr) {
  return arr.filter((x) => !x).length;
}

/**
 * Returns a number of all occurrences of the specified item
 */
function findAllOccurrences(arr, item) {
  return arr.filter((x) => x === item).length;
}

/**
 * Concatenates all elements into single string with ',' delimiter
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 * Sorts the array by country name first and city name
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country !== b.country) {
      return a.country.localeCompare(b.country);
    }
    return a.city.localeCompare(b.city);
  });
}

/**
 * Creates an identity matrix of the specified size
 */
function getIdentityMatrix(n) {
  return Array.from(
    { length: n },
    (unused, i) => Array.from({ length: n }, (u, j) => (i === j ? 1 : 0)),
  );
}

/**
 * Creates an array of integers from start to end (inclusive)
 */
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (unused, i) => start + i);
}

/**
 * Returns array containing only unique values
 */
function distinct(arr) {
  return [...new Set(arr)];
}

/**
 * Groups elements by key
 */
function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    return map;
  }, new Map());
}

/**
 * Projects each element to a sequence and flattens the result
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Returns an element from multidimensional array by indexes
 */
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((result, index) => result[index], arr);
}

/**
 * Swaps the head and tail of the specified array
 */
function swapHeadAndTail(arr) {
  const len = arr.length;
  const halfLen = Math.floor(len / 2);
  const hasMiddle = len % 2 === 1;

  const head = arr.slice(0, halfLen);
  const tail = arr.slice(hasMiddle ? halfLen + 1 : halfLen);
  const middle = hasMiddle ? [arr[halfLen]] : [];

  return [...tail, ...middle, ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
