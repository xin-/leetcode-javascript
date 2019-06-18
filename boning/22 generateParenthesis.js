/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    getStringList(result, '', 0, 0, n);
    return result;
};

var getStringList = function(result, str, count1, count2, n) {
    if(count1 > n || count2 > n) {
        return;
    }
    if(count1 === n && count2 === n ) {
        result.push(str);
    }
    if(count1 >= count2 ) {
        getStringList(result, str+'(', count1+1, count2, n);
        getStringList(result, str+')', count1, count2+1, n);
    }
}

let n = 3;
console.log(generateParenthesis(3));