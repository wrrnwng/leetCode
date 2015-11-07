/**Two Sum
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target,where index1 must be
 * less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  storage = {};
  for (var i = 0; i < nums.length; i++) {
    if (storage[nums[i]] !== undefined) {
      if (storage[nums[i]] < i) {
        return [storage[nums[i]] + 1, i + 1];
      } else {
        return [i + 1, storage[nums[i]] + 1];
      }
    } else {
      storage[target - nums[i]] = i;
    }
  }
};
