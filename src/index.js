Symbol.dispose = Symbol.for("Symbol.dispose");
const g = () => ({
    [Symbol.dispose]() {
        console.log('dispose self');
    }
})

{
    console.log("disposable is not using")
    using disposable = g()
    console.log("disposable is using")
}
console.log("disposable is disposed")
