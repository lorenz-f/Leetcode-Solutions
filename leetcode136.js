/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.filter((x) => nums.indexOf(x) === nums.lastIndexOf(x));
}
console.log(singleNumber([4, 1, 2, 1, 2]));