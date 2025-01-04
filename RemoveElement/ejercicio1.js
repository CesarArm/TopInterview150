// Difficulty: Easy
// Variables: nums, val
var nums = [3,2,2,3];
var val = 3;

const removeElement = (nums, val) => {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            if(slow !== i){
                [nums[slow], nums[i]] = [nums[i], nums[slow]];
            }
            slow++
        }        
    }
    return [slow, nums]
}

var [k, nums] = removeElement(nums, val);
nums = nums.slice(0,k);

console.log(k); //2
console.log(nums); //[2, 2]