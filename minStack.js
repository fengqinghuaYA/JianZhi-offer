/**
 * 题目
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））
 */

var arr = [];
function push(node){
    arr.push(node);
}

function pop(){
    if(arr.length == 0) {
        return null;
    }else {
        return arr.pop();
    }
}
function top(){
    if(arr.length == 0) {
        return null;
    }else {
        return arr[0];
    }
}

function min(){
    //return Math.min.apply(this, arr);
    return Math.min(...arr);
}