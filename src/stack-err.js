Symbol.dispose = Symbol.for("Symbol.dispose");

require('disposablestack/auto');

const disposeSuccess = () => ({
    [Symbol.dispose]() {
        console.log('dispose success');
    }
})
const disposeFail = () => ({
    [Symbol.dispose]() {
        throw Error('dispose fail');
    }
})

using stack = new DisposableStack();
stack.use(disposeSuccess())
stack.use(disposeFail())
stack.use(disposeSuccess())
stack.use(disposeFail())
stack[Symbol.dispose]()