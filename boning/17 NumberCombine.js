/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const results = [];
    const result = [];
    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    };
    const array = digits.split('');
    let len = array.length;
    const bigArr = [];
    if(len > 0) {
        for(let i = 0; i < len; i++) {
            const tempArr = map[array[i]];
            bigArr.push(tempArr);
        }  
    }
    // 字母组合
    var doExchange = function(arr, index){
        if(arr && arr.length > 0) {
            for (let i = 0; i<arr[index].length; i++) {
                result[index] = arr[index][i];
                if (index != arr.length - 1) {
                    doExchange(arr, index + 1)
                } else {
                    results.push(result.join(''))
                }
            }
        }
    }
    doExchange(bigArr, 0);
    return results;
};
let num = "23";
console.log(letterCombinations(num));