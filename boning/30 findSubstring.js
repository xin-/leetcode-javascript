/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!words || !s) {
        return [];
    }
    const result = [];
    let tmpLen = [...words].join('').length;
    console.log(s.length);
    const tmpMap = {};
    if(tmpLen < s.length) {
        for(let i = 0; i < words.length; i++) {
            for(let j = 0; j < s.length; j++) {
                if(s.slice(j, j + words[i].length) == words[i]) {
                    if( !tmpMap[words[i]]) {
                        tmpMap[words[i]] = [];
                    }
                    tmpMap[words[i]].push(j);
                    j += words[i].length - 1;
                }
            }
        }
        console.log(tmpMap)
    }
    return result;
};

let  s = "wordgoodgoodgoodbestword",
words = ["word","good","best","word"];
console.log(findSubstring(s, words));