/**
 * 
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1


实现思路： 倒序遍历数组，当i-1位置的数据比i位置小时，获取i到数组末尾中元素的最小值，如果最小值大于i-1位置元素，
则两位置数交换，然后i～末尾位置元素排序，当遍历到0位置页没发生上述操作时后，则整个数组进行正序排序

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums || nums.length <= 1) {
        return nums;
    }
    let index = nums.length - 1;
    let minIndex = nums.length - 1;
    for (let i = nums.length - 1; i > 0; i-- ) {
        if(nums[i] < nums[minIndex]) {
            minIndex = i;
        }
        if(nums[i-1] < nums[i]) {
            if(nums[minIndex] > nums[i-1]) {
                swap(nums, minIndex, i-1);

            } else {
                swap(nums, i, i-1);
            }
            quickSort(nums, i, nums.length-1);
            break;
        }
        index = i-1;

    }
    if(index == 0) {
        quickSort(nums);
        nums.reverse();
    }
    return nums;
}
// 快排
var quickSort = function(arr, left, right) {
    let partionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? 0 : right;
    if(left < right) {
        partionIndex = partion(arr, left, right);
        quickSort(arr, left, partionIndex-1);
        quickSort(arr, partionIndex+1, right);
    }
}

var partion = function(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for(let i = index; i <= right; i++) {
        if(arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        } 
    }
    swap(arr, pivot, index-1);
    return index-1;
}

var swap = function(arr, i, j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const nums = [5,4,7,5,3,2];
console.log(nextPermutation(nums));