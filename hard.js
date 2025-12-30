var findMedianSortedArrays = function(nums1, nums2) {
    arr = [...nums1, ...nums2]
    arrSorted = arr.sort((a, b) => a - b)
    let median;
    if(arr.length % 2 == 0) {
        median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    } else{
       median = arr[Math.floor(arr.length / 2)]
    }
   return median
};

arr1 = [1, 3, 2 ]
arr2 = [4, 6, 5, 8]
console.log(findMedianSortedArrays(arr1, arr2))