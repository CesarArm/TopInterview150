// Difficulty: easy
// Variable: nums

var nums = [3, 2, 3];

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log(majorityElement(nums))