// Difficulty: Easy
// Variable: nums1, m, nums2, n

var nums1 = [0];
var m = 0;
var nums2 = [1];
var n = 1;

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b)
    return nums1;
}

var salida = merge(nums1, m, nums2, n);
console.log(salida); //[1]