/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**********************************************************************
 * 
 * 解题思路：分3种情况，1、两个数组都为空 2、其中一个数字为空 3、两个数组都不为空
 * 以上3种情况细分 1、直接返回空数组 2、返回不为空的数组
 * 3、从数组索引index=0开始，两个数组对应索引元素相加，结果数组对应索引位置元素为
 * 相加之和取余10，并记相加之和除以10作为进位数，依次同时遍厉两个数组，没值补0，最后
 * 判断最后进位，如果为1，则结果数组最后一项加上进位，返回结果数组
 * 
 **********************************************************************/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = [];
    if(l1 || l2) {
        let index = 0;
        // 进位
        let carry = 0;
        if(l1 && l2) {
            while(l1[index] != undefined || l2[index] != undefined) {
                if(l1[index] != undefined && l2[index] != undefined) {         
                    let num1 = index < l1.length ? l1[index] : 0;
                    let num2 = index < l2.length ? l2[index] : 0;
                    const sum = num1 + num2 + carry;
                    carry = Math.floor(sum / 10);
                    result.push(sum % 10);
                } else if (l1[index] != undefined) {
                    result.push(l1[index]);          
                } else if (l2[index] != undefined) {
                    result.push(l2[index]);
                }
                index++;
            }
            if(carry > 0 && result.length > 0) {
                result[result.length -1] = result[result.length -1] + carry;
            }
        } else if(l1) {
            return l1;
        } else if(l2) {
            return l2;
        }
    }   
    return result;
};
// const list1 = [2, 4, 3];
// const list2 = [5, 6, 4];
// const list1 = [0, 9, 3];
// const list2 = [];
// const list1 = [];
// const list2 = [0, 9, 3];
const list1 = [2, 3];
const list2 = [0, 9, 3];

console.log(addTwoNumbers(list1, list2));