// 5370. 设计地铁系统


var UndergroundSystem = function () {
    this.m = new Map();
    this.durArr = [];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    let inRec = {
        from_time: 0,
        to_time: 0,
        from: "",
        to: ""
    };
    if (!this.m.has(id)) {
        inRec.from_time = t;
        inRec.from = stationName;
        this.m.set(id, inRec);
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    let timeRec = {
        from_to: "",
        dur: 0
    }
    if (this.m.has(id)) {
        timeRec.from_to = this.m.get(id).from + "_" + stationName;
        timeRec.dur = t - this.m.get(id).from_time;
        this.durArr.push(timeRec);
        this.m.delete(id);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let sum = 0,
        cnt = 0;
    this.durArr.forEach((val, idx, arr) => {
        if (val.from_to === (startStation + "_" + endStation)) {
            sum += val.dur;
            cnt++;
        }
    })
    return (sum / cnt).toFixed(5);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

let u = new UndergroundSystem();
u.checkIn(45, "Leyton", 3);
u.checkIn(32, "Paradise", 8);
u.checkIn(27, "Leyton", 10);
u.checkOut(45, "Waterloo", 15);
u.checkOut(27, "Waterloo", 20);
u.checkOut(32, "Cambridge", 22);
console.log(u.durArr);
console.log(u.getAverageTime("Paradise", "Cambridge"));
console.log(u.getAverageTime("Leyton", "Waterloo"));
u.checkIn(10, "Leyton", 24);
console.log(u.getAverageTime("Leyton", "Waterloo"));
u.checkOut(10, "Waterloo", 38);
console.log(u.getAverageTime("Leyton", "Waterloo")); 