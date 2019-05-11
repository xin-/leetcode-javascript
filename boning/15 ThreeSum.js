/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    if (nums) {
        nums.sort((a, b) => {
            return a - b;
        });
        for (let i = 0;i < nums.length; i++) {
            let j = i+1, k = nums.length - 1;
            let temp = 0 - nums[i];
            while(j < k) {
                if(nums[j] + nums[k] == temp) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    if(j == k) {
                        break;
                    }
                    while( j<k && nums[j] == nums[j-1]) {
                        j++;
                    }
                    while( j<k && nums[k] == nums[k+1]) {
                        k--;
                    }
                } else if(nums[j] + nums[k] < temp) {
                    j++;
                    while( j<k && nums[j] == nums[j+1]) {
                        j++;
                    }
                } else if(nums[j] + nums[k] > temp){
                    k--;
                    while( j<k && nums[k] == nums[k-1]) {
                        k--;
                    }
                }
            }  
            
        }
    }
    return result;
};
// 数组去重
const removeRepeat = function(arr){
    const obj={};
    for(let i=0;i<arr.length;i++){
        // 判断当前项是否遍历过，是则删除，否存入obj以作对照
        if(obj.hasOwnProperty(arr[i])){ 
            arr.splice(i,1)
            i++;
        }
        obj[arr[i]]=i;
    }
    return arr;
}

const nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(nums));