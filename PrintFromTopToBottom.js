/**
 * 题目描述
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//树的广度优先遍历BFS
function PrintFromTopToBottom(root)
{
    // write code here
    var res = [], tree = [];
    if (!root) return [];
    tree.push(root);
    while(tree.length) {
        var node = tree.shift();
        res.push(node.val);
        if(node.left) tree.push(node.left);
        if(node.right) tree.push(node.right);
    } 
    return res;
}