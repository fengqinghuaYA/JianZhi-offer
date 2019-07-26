/**
 * 题目
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */

function printListFromTailToHead(head){
    // write code here
    var arr = [];
    while(head != null ){
        
        arr.splice(0,0,head.val);
        head = head.next;
    }
    
    return arr
}