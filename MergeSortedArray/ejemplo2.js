// Difficulty: Easy
// Variable: nums1, m, nums2, n

var nums1 = [1];
var m = 1;
var nums2 = [];
var n = 0;

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b)
    return nums1;
}

var salida = merge(nums1, m, nums2, n);
console.log(salida); //[1]