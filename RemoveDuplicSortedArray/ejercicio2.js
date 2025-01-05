// Dificultad: easy
// Variable nums
var nums = [0,0,1,1,1,2,2,3,3,4]

const numerosUnicos = [ ...new Set(nums)];

let k = numerosUnicos.length;

console.log(k); //5
console.log(numerosUnicos); //[0, 1, 2, 3, 4]