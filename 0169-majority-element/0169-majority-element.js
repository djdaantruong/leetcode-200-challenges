/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0
    var majoNum = 0
    var len = nums.length
    
    for (let i = 0; i < len; i++) {
        if(!count) {
            majoNum = nums[i]
            count = 1
        } else {
            count += nums[i] === majoNum ? 1 : -1
        }
    }
    
    return majoNum
    
};