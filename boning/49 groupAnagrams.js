/**
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 先排序再判断是否存在相同的
    let arr = new Map();
    for(let i =0;i<strs.length;i++){
        let t = test(strs[i]);
        if(arr.has(t)){
            let s = arr.get(test(strs[i]));
            s.push(strs[i]);
            arr.set(t,s);
        }else{
            arr.set(t,[strs[i]]);
        }
    }
    return Array.from(arr.values())
    
    function test(str1){
        let arr = str1.split('');
        arr.sort();
        return arr.join('')
       

    }
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));