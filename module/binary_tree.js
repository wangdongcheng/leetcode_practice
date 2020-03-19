module.exports = {
    TreeNode: function (val) {
        this.val = val;
        this.left = this.right = null;
    },

    getTreeFromLayerOrderArray: function (array) {
        let n = array.length;
        if (!n) return null;
        let index = 0;
        let root = new this.TreeNode(array[index++]);
        let queue = [root];
        while (index < n) {
            let top = queue.shift();
            let v = array[index++];
            top.left = v == null ? null : new this.TreeNode(v);
            if (index < n) {
                let v = array[index++];
                top.right = v == null ? null : new this.TreeNode(v);
            }
            if (top.left) queue.push(top.left);
            if (top.right) queue.push(top.right);
        }
        return root;
    },

    getLayerOrderArrayFromTree: function (root) {
        let res = [];
        let que = [root];
        while (que.length) {
            let len = que.length;
            for (let i = 0; i < len; i++) {
                let cur = que.shift();
                if (cur) {
                    res.push(cur.val);
                    que.push(cur.left, cur.right);
                } else {
                    res.push(null);
                }
            }
        }
        while (res.length > 1 && res[res.length - 1] == null) res.pop(); // 删掉结尾的 null
        return res;
    }
}