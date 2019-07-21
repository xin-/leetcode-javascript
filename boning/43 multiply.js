/**
 * 
 * 未完成
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(!num1 || !num2) {
        return 0 + '';
    }
    if(num1==1) return num2;
    if(num2==1) return num1;
    if(num1=="0" || num2=="0") return "0";
        
    let m = num1.length, n = num2.length;
    const nums = []; 
    for(let i = m-1; i >= 0; i--){
        // 进位
        let carry = 0;
        for(let j = n-1; j >= 0;j--){
            nums[i+j+1] = nums[i+j+1] ? nums[i+j+1] : 0;
            let t = nums[i+j+1] + (+num1[i]) * (+num2[j]) + carry;
            nums[i+j+1] = Math.ceil(t % 10);
            carry = t/10;
        }
        if(carry) {
            nums[i] += carry;
        } 
    }
    let ans = '';
    let index = 0;
    while(nums[index]==0 || isNaN(nums[index])) {
        ++index;
    }
    while(index < nums.length){
        ans += (nums[index] + '');
        ++index;
    }
    return ans;
};

let num1 = "123456789";
let num2 = "987654321";
console.log(multiply(num1, num2));