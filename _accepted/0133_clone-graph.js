/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

const getNodeFromArray = arr => {
    let nodeArr = [];
    arr.forEach((val, idx) => {
        let node = new Node(idx + 1);
        nodeArr.push(node);
    })
    arr.forEach((val, idx) => {
        val.forEach(v => {
            nodeArr[idx].neighbors.push(nodeArr[v - 1]);
        })
    })
    return nodeArr[0];
}

const getArrayFromNode = node => {
    if (!node) return [];
    let visited = new Set(),
        m = new Map(),
        que = [],
        max = 0,
        ret = [];

    que.push(node);
    visited.add(node.val);

    while (que.length) {
        let len = que.length;

        for (let i = 0; i < len; i++) {
            let curr = que.shift(),
                ne = [];

            curr.neighbors.forEach(n => {
                ne.push(n.val);
                if (!visited.has(n.val)) {
                    visited.add(n.val);
                    que.push(n);
                }
            })
            m.set(curr.val, ne);
            max = Math.max(max, curr.val);
        }
    }
    for (let i = 1; i <= max; i++) {
        ret.push(m.get(i));
    }
    return ret;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return undefined;
    if (node && !node.neighbors.length) return new Node(1, []);

    let que = [],
        m = new Map(),
        newNode = new Node();

    que.push(node);
    while (que.length) {
        let len = que.length;
        for (let i = 0; i < len; i++) {
            let curr = que.shift();
            let nArr = [];
            if (!m.has(curr.val)) {
                newNode = new Node(curr.val);
            }
            else {
                newNode = m.get(curr.val);
            }
            curr.neighbors.forEach(n => {
                if (!m.has(n.val)) {
                    que.push(n);
                    m.set(n.val, new Node(n.val));
                }
                nArr.push(m.get(n.val));
            })
            newNode.neighbors = nArr;
            m.set(newNode.val, newNode);
        }
    }
    return m.get(1);
};

const log = arr => {
    console.log(getArrayFromNode(cloneGraph((getNodeFromArray(arr)))));
    // console.log(cloneGraph((getNodeFromArray(arr))));
}

log([[2, 4], [1, 3], [2, 4], [1, 3]]);
log([
    [2, 3, 4, 5, 7],
    [1, 3, 6],
    [1, 2, 4, 7],
    [1, 3, 5],
    [1, 4, 6, 7],
    [2, 5, 7],
    [1, 3, 5, 6]
]);
log([]);
log([[]]);