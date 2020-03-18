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
    }
}