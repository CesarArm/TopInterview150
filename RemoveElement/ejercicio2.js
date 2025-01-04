// Difficulty: Easy
// Variables: nums, val
var nums = [0,1,2,2,3,0,4,2];
var val = 2;

const removeElement = (nums, val) => {
    let filteredNums = nums.filter(num => num !== val);
    return [filteredNums.length, filteredNums]
}

var [k, nums] = removeElement(nums, val)

console.log(k); //5
console.log(nums); //[0,1,4,0,3]