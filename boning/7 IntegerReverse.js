/**
 * 反转整数
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = '';
    const str = x + '';
    let index = str.length - 1;
    while(str[index]) {
        result += str[index];
        index--;
    }
    if (result) {
        if (result.length > 1 && (result[result.length -1] == '-' || result[result.length -1] == '+')) {
            result = result[result.length -1] == '-' ?  -result.slice(0, result.length-1) : +result.slice(0, result.length-1);
        }
        result = +result <= Math.pow(-2,31) || +result >= Math.pow(-2,31) - 1 ? 0 : +result;  
    }
    
    return result;
};
const num = -2147483647;
console.log(reverse(num));