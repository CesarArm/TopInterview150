// Difficulty: medium
// Variable: nums

var nums = [0,0,1,1,1,1,2,3,3]

const removeDuplicates = (nums) => {
    return nums.filter((num, index) => index < 2 || num > nums[index - 2])
}

nums = removeDuplicates(nums);

console.log(nums.length);
console.log(nums);