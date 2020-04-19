// 5389. 点菜展示表

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let tab = [];
    let food = [];
    let m = new Map();

    orders.forEach(item => {
        if (!tab.includes(item[1])) {
            tab.push(item[1]);
        }
        if (!food.includes(item[2])) {
            food.push(item[2]);

        }
        const key = item[1] + "_" + item[2];
        if (m.has(key)) {
            let qty = m.get(key);
            qty++
            m.set(key, qty);
        } else {
            m.set(key, 1);
        }
    })

    let ret = [];
    let row = ["Table"];
    food.sort();
    food.forEach(f => {
        row.push(f);
    })
    ret.push(row);
    tab.sort((a, b) => a - b);
    tab.forEach((t, idx) => {
        row = [t];
        food.forEach(f => {
            const k = t + "_" + f;
            if (m.get(k)) {
                row.push(m.get(k).toString());
            } else {
                row.push("0");
            }
        })
        ret.push(row);
    })
    return ret;
};



console.log(displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]), [["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"], ["3", "0", "2", "1", "0"], ["5", "0", "1", "0", "1"], ["10", "1", "0", "0", "0"]]);