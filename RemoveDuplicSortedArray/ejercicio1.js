// Difficulty: easy
// Variable nums
var nums = [1,1,2]

function removeDuplicates(nums){
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
        
    }
    return k+1;
}

let k = removeDuplicates(nums);

console.log(k); //5
console.log(nums.slice(0, k)); //[1, 2]