/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length==0) return [];
    
    const sumArray = [];
    
    let currentSum = nums[0];
    sumArray.push(currentSum)
    
    for(let i = 1; i<nums.length; i++){
        currentSum+=nums[i]
        sumArray.push(currentSum)
    }
    return sumArray;
};