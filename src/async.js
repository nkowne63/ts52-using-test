Symbol.asyncDispose = Symbol.for("Symbol.asyncDispose");

const g = () => ({
    [Symbol.asyncDispose]() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('dispose self');
                resolve();
            }, 1000);
        })
    }
})

const main = async () => {
    {
        await using disposable = Promise.resolve(g())
        console.log(disposable)
        console.log("disposable is using")
        console.log("wait 1000 ms")
    }
    console.log("disposable is disposed")
}

main()
