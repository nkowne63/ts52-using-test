require('disposablestack/auto');

const g = () => ({
    [Symbol.dispose]() {
        console.log('dispose g');
    }
})

const innerFunc = () => {
    // using disposable = g()
    const disposable = g()
    console.log("after using")
    return disposable
}

using outerDisposable = innerFunc()
console.log("outerDisposable using")