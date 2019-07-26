/**
 * 题目
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    var slow = pHead, fast = pHead, node1 = pHead,node2;
    if(pHead == null){
        return 1;
    }
    if(pHead.next == null){
        return null;
    }
    while(slow != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) break;
    }
    node2 = slow;
    while( node1 != node2){
        node1 = node1.next;
        node2 = node2.next;
    }
    return node1;
}
