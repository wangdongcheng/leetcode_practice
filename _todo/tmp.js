let d = new Date();
let arr = [];

let i = 1;
while (i <= 10) {
    arr.push({
        id: i,
        time: new Date()
    });
    i++;
}
i=1;
while(i<=10){
    arr.push({
        id: i,
        time: new Date()
    });
    i++;
}
arr.sort((a, b) => b.id - a.id);
console.log(arr);