function containsDuplicate(nums) {
    let referenceArr = [];
    for (let i in nums) {
    // cross-referencing each element for a non-existant position (-1)
        if (referenceArr.indexOf(nums[i]) === -1) {
            referenceArr.push(nums[i])
        }
    }
    return referenceArr.length !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 4, 4]))
