/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
var result = [];
var currSum;

for (var i = 0; i < nums.length; i++) {
    currSum = 0;
    
    for (var j = 0; j < i + 1; j++) {
        currSum += nums[j];
    }
    
    result.push(currSum);
}

return result;
};