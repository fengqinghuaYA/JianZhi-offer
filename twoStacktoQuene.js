/**
 * 题目
 * 使用两个栈来模拟一个队列
 */

 var arr1 = [], arr2 = [];
 
 function push(node) {
     arr1.push(node);
 }

 function pop() {
     //在进行出队操作时，首先判断第二个栈是否为空，
     //若为空，则将第一个栈的所有元素出栈且放入第二个栈中再执行一次出栈操作，则为队列出队
     //若不为空，直接对第二个栈执行出栈操作 即为出队操作
    if(arr2.length == 0) {
        if(arr1.length == 0){
            return null;
        }else {
            while(arr1.length != 0){
                arr2.push(arr1.pop());
            }
            return arr2.pop();
        }
    }else {
        return arr2.pop();
    }
 }