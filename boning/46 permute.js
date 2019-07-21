/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums || nums.length == 0) {
        return nums;
    }
    const result = [];
    perm(nums, 0, nums.length, result);
    return result;
};
/**
 * 交换位置
 * @param {*} nums 
 * @param {*} index1 
 * @param {*} index2 
 */
var swap = function(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
};
            //                     |
            //         /           |      \
            //       /             |        \
            //                     |
            //     1               2              3
            //    /  \            /  \           /  \
            // 2       3       1       3       1     2
            // |       |       |       |       |     |
            // 3       2       3       1       2     1
/**
 * 递归全排列(回溯)
 * @param {*} nums 
 * @param {*} start 
 * @param {*} result 
 */
var perm = function(nums, start, end, result) {
    if(start == end) {
        result.push([...nums]);
    } else {
        for(let i = start; i < end; i++) {
            swap(nums, start, i);
            perm(nums, start + 1, end, result);
            swap(nums, start, i);
        }
    }
};

const nums = [1,2,3,4];
console.log(permute(nums));
