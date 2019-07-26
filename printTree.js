/**
 * 题目
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */
// function TreeNode(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }
//树的BFS
 function Print(root) {
     var res = [], arr = [];
     if(!root) return [];
     arr.push(root);
     while(arr.length != 0) {
         var list =[];
         var len = arr.length;
         for(var i=0;i<len;i++){
             var node = arr.shift();
             list.push(node.val);
             if(node.left) arr.push(node.left);
             if(node.right) arr.push(node.right);
         }
         res.push(list);
     }
     return res;
 }