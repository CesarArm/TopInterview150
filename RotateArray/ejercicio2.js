// Difficulty: medium
// Variable: nums, k 

var nums = [-1,-100,3,99];
var k = 2;

function rotate(nums, k) {
    k = k % nums.length;
    nums = nums.slice(-k).concat(nums.slice(0, - k));
    return nums;
}

nums = rotate(nums, k);
console.log(nums); // Salida: [3,99,-1,-100]