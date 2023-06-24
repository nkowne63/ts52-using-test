require('disposablestack/auto');

const g = () => ({
    [Symbol.dispose]() {
        console.log('dispose self');
    }
})

using disposable = g()
console.log("after using")