/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
let result = [];
let currSum;

for (let i = 0; i < nums.length; i++) {
    currSum = 0;    
    for (let j = 0; j < i + 1; j++) {
        currSum += nums[j];
    }
    
    result.push(currSum);
}

return result;
};
