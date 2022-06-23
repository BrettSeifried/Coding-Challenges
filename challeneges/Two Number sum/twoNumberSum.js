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
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
