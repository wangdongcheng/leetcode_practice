// ../markdown/1028_recover-a-tree-from-preorder-traversal.md

const tree = require("../module/binary_tree");
const { TreeNode } = require("../module/binary_tree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    let arr = S.split("");
    let nodes = [];
    let st = [];
    let str = "";
    let pos = "";
    const dsh = "-";
    let n = 0;
    let d = 0; // depth

    arr.forEach(v => {
        if (v === dsh) {
            if (st.length) {
                while (st.length) {
                    str += st.shift();
                }
                n = parseInt(str);
                // If a node has only one child
                // that child is guaranteed to be the left child.
                if (nodes.length) {
                    pos = (d === nodes[nodes.length - 1].dep + 1) ? "L" : "R";
                }
                nodes.push({
                    val: n,
                    dep: d,
                    pos: pos
                });
                d = 1;
                str = "";
            } else {
                d++;
            }
        } else {
            st.push(v);
        }
    })
    while (st.length) {
        str += st.shift();
    }
    n = parseInt(str);
    nodes.push({
        val: n,
        dep: d,
        pos: (d === nodes[nodes.length - 1].dep + 1) ? "L" : "R"
    });

    nodes.forEach((v, i, a) => {
        a[i].leftIdx = a.findIndex((target, idx, arr) => target.dep === v.dep + 1 && idx > i && target.pos === "L");
        a[i].rightIdx = a.findIndex((target, idx, arr) => target.dep === v.dep + 1 && idx > i && target.pos === "R");
    });
    let node = root = new TreeNode(nodes.shift().val);
    let que = [nodes[0]];
    while(que.length){
        const curr = que.shift();
    }
    return que;
};

const test = (S, exp) => {
    console.log(tree.getLayerOrderArrayFromTree(recoverFromPreorder(S)) === exp);
}
console.log(recoverFromPreorder("1-2--3--4-5--6--7"));
console.log(recoverFromPreorder("1-2--3---4-5--6---7"));
console.log(recoverFromPreorder("1-401--349---90--88"));