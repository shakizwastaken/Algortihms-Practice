/**
 * Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements,
 * with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 *
 * Examples
 * Valid arrays
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
 * It gets obvious if we write b's elements in terms of squares:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 *
 * Invalid arrays
 * If we change the first number to something else, comp may not return true anymore:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 132 is not the square of any number of a.
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 36100 is not the square of any number of a.
 *
 * Remarks
 * a or b might be []. a or b might be null.
 *
 * If a or b are null, the problem doesn't make sense so return false.
 *
 * If a or b are empty then the result is self-evident.
 *
 * a or b are empty or not empty lists.
 *
 *
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {boolean}
 *
 *
 */

const comp = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return checkRoot(arr1, arr2);
};

const checkRoot = (arr1, arr2) => {
  if (arr1[0] !== Math.sqrt(arr2[0])) return false;

  arr1.splice(0, 1);
  arr2.splice(0, 1);

  if (arr1.length === 0) return true;

  return checkRoot(arr1, arr2);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = comp;
// // // // // // // // // //
