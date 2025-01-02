// Difficulty: Easy
// Variable: nums1, m, nums2, n

var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;

const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b)
    return nums1;
}

var salida = merge(nums1, m, nums2, n);
console.log(salida); //[1,2,2,3,5,6]