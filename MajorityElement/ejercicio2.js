// Difficulty: easy
// Variable: nums

var nums = [2,2,1,1,1,2,2];

function majorityElement(nums) {
    nums.sort((a,b) => a - b)
    return nums[Math.floor(nums.length / 2)]
}

console.log(majorityElement(nums));