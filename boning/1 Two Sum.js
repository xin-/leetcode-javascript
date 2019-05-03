/**
 * 方法1: 利用空间换时间
 * 时间复杂度O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [...nums];
    if (nums) {
        for (let i = 0; i < nums.length; i++) {
            if (result.indexOf(target - nums[i]) >= 0 && result.indexOf(target - nums[i]) != i) {
                let index = result.indexOf(target - nums[i]);
                return i < index ?  [ i, index] : [index, i];
            }
        }
    }
    return [];
};

/**
 * 方法2: 利用map
 * 时间复杂度O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    const result = [];
    if (nums) {
        const tempMap = {};
        for (let i = 0; i < nums.length; i++) {
            if (tempMap[target - nums[i]] != undefined) {
                result.push(tempMap[target - nums[i]], i);
                break;
            }
            tempMap[nums[i]] = i;
        }
    }
    return result;
};

var nums = [0,4,3,0]
var target = 0;
var sum = twoSum1(nums, target);
console.log(sum);