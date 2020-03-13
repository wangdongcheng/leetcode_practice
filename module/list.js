module.exports = {
    log: function (any) {
        console.log(any);
    },

    /**
     * 链表节点
     * @param {*} val
     * @param {ListNode} next
     */
    ListNode: function (val, next = null) {
        this.val = val;
        this.next = next;
    },

    /**
     * 将一个数组转为链表
     * @param {array} a
     * @return {ListNode}
     */
    getListFromArray: function (a) {
        let dummy = new this.ListNode();
        let pre = dummy;
        a.forEach(x => pre = pre.next = new this.ListNode(x));
        return dummy.next;
    },
    /**
     * 将一个链表转为数组
     * @param {ListNode} node
     * @return {array}
     */
    getArrayFromList: function (node) {
        let a = [];
        while (node) {
            a.push(node.val);
            node = node.next;
        }
        return a;
    },
    /**
     * 打印一个链表
     * @param {ListNode} node 
     */
    logList: function (node) {
        let str = 'list: ';
        while (node) {
            str += node.val + '->';
            node = node.next;
        }
        str += 'end';
        this.log(str);
    }
}