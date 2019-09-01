
/**
 * 定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

思路： 虚拟head；

 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummyHead1 = new ListNode(0);
    let dummyHead2 = new ListNode(0);
    let node1 = dummyHead1;
    let node2 = dummyHead2;
    while (head != null) {
        if (head.val < x) {
            node1.next = head;
            head = head.next;
            node1 = node1.next;
            node1.next = null;
        } else {
            node2.next = head;
            head = head.next;
            node2 = node2.next;
            node2.next = null;
        }
    }
    node1.next = dummyHead2.next;
    return dummyHead1.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createListNode(arr) {
    let p;
    const node = p = new ListNode(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }
    return node;
}

const arr = [1, 4, 3, 2, 5, 2];
const node = createListNode(arr);
partition(node, 3)
let p = node;
for(let i = 0; i < arr.length; i++) {
    console.log(p)
    if(p.next) {
        p = p.next;
    }
}