/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.


 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let result = head.next;
    let p = head.next;
    let temp = head;
    while(head && head.next) {
        head.next = p.next || null; 
        p.next = head;
        head = head.next;
        if(head) {
            p = head.next;
            if(p) {
                temp.next = p;
                temp = head;
            }
        }
    }
    return result;
};
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// console.log(head);
console.log(swapPairs(head));