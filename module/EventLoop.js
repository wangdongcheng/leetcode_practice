// Event Loop

// 还要说到一个概念叫做任务队列，任务队列分为macrotask（宏任务）microtask（微任务）。

// 宏任务队列包括 script(全局任务)、setTimeout、setInterval、I/O等;
// 微任务队列包括 Promise等。
// 执行顺序：在JavaScript脚本执行过程中，是从宏队列开始的。每次执行完一个宏任务之后，会去检查是否存在微任务；如果有，则执行微任务直到清空微任务队列后再去执行宏任务。

console.log('script start');

setTimeout(function() {
  console.log('timeout1');
  new Promise(resolve => {
        console.log('promise2');
        resolve();
    }).then(function() {
        console.log('then2');
    })
}, 10);

new Promise(resolve => {
    console.log('promise1');
    setTimeout(() => console.log('timeout2'), 10);
    resolve();
}).then(function() {
    console.log('then1');
})

console.log('script end');

// result:
// script start
// promise1
// script end
// then1
// timeout1
// promise2
// then2
// timeout2


// 下面来逐步理解

// step1: 整体script进入作为第一个宏任务进入主线程，遇到console.log(),输出'script start'；
// step2: script程序继续向下执行，遇到setTimeout,把timeout1作为宏任务分发到宏任务队列中；
// step3: script程序继续向下执行，遇到Promise实例，且通过new形成构造函数，构造函数立即执行，里面的code立即执行,输出 'promise1'，并把timeout2作为宏任务放到宏任务队列中。而后续的.then(),作为微任务被分发到微任务队列中；
// step4: script程序继续向下执行，遇到console.log(),输出'script end'；
// step5: 此时主进程任务执行完毕，检查微任务队列中是否存在微任务，如果存在，则进行依次清空，此次查找到只有一个微任务（step3中）then1,执行后输出'then1'；
// step6: 清空完微任务的队列后，进行第二次循环，此时宏队列中有2个宏任务，分别是timeout1,timeout2；
// step7: 执行第一个宏任务timeout1,遇到console.log()，输出'timeout1'；
// step8: 继续向下执行，遇到Promise实例且立即执行，输出'promise2',而.then(),作为微任务被分发到微任务队列中,并且立即执行微任务输出'then2';
// stop9: 清空完微任务的队列后，进行第三次循环，此时宏任务队列中只有timeout2,执行后输出timeout2;
// result: script start、promise1、script end、then1、timeout1、promise2、then2、timeout2