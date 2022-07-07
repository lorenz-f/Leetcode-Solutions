function longestConsecutive(nums) {
  // setting both maximum and (current) consecutive counts to 1 as a default in an array greater than length of 0
    let [consecCount, max] = [1, 1];
    if (nums.length === 0) {
        return 0;
    }
    nums.sort(function(a, b) {
        return a - b;
    })
    for (let i = 1; i < nums.length; i++) {
      // checking prior position in the array for a matching +1 sequence and proceeding
      // according to if it is or not
        if (nums[i - 1] + 1 === nums[i]) {
            consecCount++;
        } else if (nums[i - 1] === nums[i]) {
            continue;
        } else {
            consecCount = 1;
        }
        // if current streak is larger than previous streak, set max to it
        if (max < consecCount) {
            max = consecCount;
        }
    }
    return max;
};

// test run 
console.log(longestConsecutive([1, 4, 5, 6, 7, 9]));
