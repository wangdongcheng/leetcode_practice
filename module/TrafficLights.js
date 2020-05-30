function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

let light = (fn, timer) => new Promise(resolve => {
    setTimeout(function () {
        fn()
        resolve()
    }, timer)
})

// times为交替次数
function start(times) {
    if (!times) {
        return
    }

    times--
    Promise.resolve()
        .then(() => light(red, 5000))
        .then(() => light(green, 1000))
        .then(() => light(yellow, 2000))
        .then(() => start(times))

}

start(3);