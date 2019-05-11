/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = '';
    if (trim(str)) {
        let char0 = str[0];
        const regRex = '[0-9-+](.*)';
        if (str.length > 1 && str.match(regRex)) {
            for (let i=1; i<str.length; i++) {
                if (!str[i].match(/\d+/)) {
                    str = str.substring(0, i);
                    break;
                }
            }
            if (char0 == '-') {
                result = parseInt(str.substring(1, str.length)) > 2147483649 ? -parseInt(str.substring(2, str.length)) : -parseInt(str.substring(1, str.length));
            } else if (char0 == '+'){
                result = parseInt(str.substring(1, str.length)) > 2147483647 ? parseInt(str.substring(2, str.length)) : parseInt(str.substring(1, str.length));
            } else {
                result = parseInt(str) > 2147483647 ? parseInt(str.substring(1, str.length)) : parseInt(str);
            }

        } else if (str.match(regRex)) {
            result = parseInt(str);
        }
    }
    return result;
};

/**
 * 去除字符串两端空格
 * @param {*} str 
 */
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");  
}

// let str = "-42";
let str = "-42676923sdknfgaer";
console.log(myAtoi(str));