/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？


解决思路： 因为是js实现，看题目传的是个数组，所以这里采用了获取length
但是按照正常的链表来说，使用双指针就可以解决这个问题

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head) {
        let len = head.length;
        if(n < len && n > 0) {
            // head.splice(len - n, 1);
            for (let i = 0; i < len; i++) {
                if(i == len - n ) {
                    head[i] = head[i+1];
                }
            }
            head.length = len - 1;
        }
    }
    return head;
};
const head = [1, 2, 3,4, 5];
console.log(removeNthFromEnd(head, 2));