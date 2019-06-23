/**
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
        index = i;
        if(nums[i] < nums[minIndex]) {
            minIndex = i;
        }
        if(nums[i-1] < nums[i]) {
            if(nums[minIndex] > nums[i-1]) {
                swap(nums, minIndex, i-1);
                quickSort(i, nums.length-1, nums);
            } else {
                swap(nums, i, i-1);
            }
            break;
        }
    }
    if(index == 0) {
        quickSort(nums);
    }
    return nums;
}
// 快排
var quickSort = function(left, right, arr) {
    let len = arr.length;
    let partionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? 0 : right;
    if(left < right) {
        partionIndex = partion(arr, left, right);
        quickSort(left, partionIndex-1, arr);
        quickSort(partionIndex+1, right, arr);
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

const nums = [1, 3, 2];
console.log(nextPermutation(nums));