/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 **********************************************************************************
 * 解题思路（这个算法是借鉴网上大牛的）：
 * 首先：获取hash值，创建一个map（类数组）
 * 第二：遍厉目标字符串，根据hash填充map
 * 最后：map转为字符串返回
 * 
 **********************************************************************************/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(s.length <= numRows || numRows === 1) {
    return s
  }

  const step = (numRows-1) * 2
  const map = Array.from({length: numRows}).fill('');
  s.split('').forEach((char, index) => {
    const num = index % step;
    const charIndex = num < numRows ? num : step - num;
    map[charIndex] += char;
  })
  return map.join('')
};

const testString = 'LEETCODEISHIRING';
console.log(convert(testString, 3));