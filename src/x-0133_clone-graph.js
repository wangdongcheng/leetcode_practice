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
        let n = [];
        val.forEach(v => {
            nodeArr[idx].neighbors.push(nodeArr[v - 1]);
        })
    })
    return nodeArr[0];
}

const getArrayFromNode = node => {
    let visited = [];
    
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return undefined;
    if (node && !node.neighbors.length) return new Node(1, []);
    let m = new Map();
    while (m.has(node.val)) {
        let n = [];
        node.neighbors.forEach(ng => {
            n.push(ng.val);
        })
        m.set(node.val, n);
        node = node.neighbors[0];
    }
};

console.log(getNodeFromArray([[2, 4], [1, 3], [2, 4], [1, 3]]));
console.log(getNodeFromArray([[]]));