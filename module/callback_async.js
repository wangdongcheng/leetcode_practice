const f2 = () => console.log("f2");
const f3 = () => console.log("f3");

//改进版-异步写法
function f1(callback) {
    console.log("f1");
    setTimeout(function () {
        // f1的任务代码
        callback();
    }, 3000);
}

f1(f2);

f3();