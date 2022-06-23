function twoNumberSum(array, targetSum) {
  // Write your code here.
  // set an empty array
  const nums = {};
  //checks each index of the array, no longer let i = 0, i < arr.length .....
  for (const num of array) {
    // takes target, subtracts from each i. targetSum - i = Y
    const matching = targetSum - num;
    if (matching in nums) {
      // if Y === a number in the array, return
      return [matching, num];
    } else {
      //Store in nums if doesn't match targetSum
      nums[num] = true;
    }
  }
  return [];
}

console.log('TwoNumSum', twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

console.log(
  'valid sequence',
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);

function sortedSquaredArray(array) {
  // Write your code here.
  // .fill sets array.length to all 0s.
  const sortedArr = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    // set value to i in Array passed through
    const value = array[i];
    // Square the value
    sortedArr[i] = value * value;
  }
  // .sort puts value in order
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}
console.log('sortedArr', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
