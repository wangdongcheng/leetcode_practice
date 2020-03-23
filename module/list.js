module.exports = {
    log: function (any) {
        console.log(any);
    },

    /**
     * @param {*} val
     * @param {ListNode} next
     */
    ListNode: function (val, next = null) {
        this.val = val;
        this.next = next;
    },

    /**
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