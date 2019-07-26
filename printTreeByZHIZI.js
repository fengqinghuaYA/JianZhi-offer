/**
 * 题目
 * 请实现一个函数按照之字形打印二叉树，
 * 即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */

// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }
function Print(pRoot)
{
    // write code here
    var res = [],tree = [];
    var k=1;
    if(!pRoot) return [];
    tree.push(pRoot);   
    while(tree.length != 0){
        var len = tree.length;
        var list = [];
        for(var i=0;i<len;i++){
            var node = tree.shift();
            k%2 == 1 ? list.push(node.val):list.unshift(node.val);
            if(node.left) tree.push(node.left);
            if(node.right) tree.push(node.right);
        }
        k++;
        res.push(list);
    }
    return res;
}