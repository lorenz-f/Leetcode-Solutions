function findMedianSortedArrays(nums1, nums2) {
  // sorting and spreading all elements of both n and m length arrays into a single array
    let sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let median = Math.floor(sortedArray.length / 2);
    // checking if the finalized array is only two elements and returning a respective median
    if (sortedArray.length % 2 == 1) {
      return sortedArray[median];
    }
    return (sortedArray[median] + sortedArray[median - 1]) / 2;
};

console.log(findMedianSortedArrays([1,2], [3,4]))
