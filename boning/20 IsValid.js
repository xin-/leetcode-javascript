/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s || s.length == 0) {
        return true;
    }
    let little = ')';
    let middle = ']';
    let large = '}';
    let temp = "([{";
    const symbolStack = [];
    let flag = false;
    for (let i=0; i<s.length; i++) {

        if(s[i] == '(') {
            flag = true;
            symbolStack.push(little);
        } else if ( s[i] == '[') {
            flag = true;
            symbolStack.push(middle);
        } else if( s[i] == '{') {
            flag = true;
            symbolStack.push(large);
        }
        if(temp.indexOf(s[i]) < 0) {
            if (symbolStack && symbolStack.length > 0 && s[i] == symbolStack[symbolStack.length - 1]) {
                symbolStack.pop();
            } else {
                return false;
            }
        }
    }
    if(flag && (!symbolStack || symbolStack.length == 0)) {
        return true;
    }
    return false;
};

let s = "({[}])";
console.log(isValid(s));