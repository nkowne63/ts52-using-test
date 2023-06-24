const g = () => ({})

{
    console.log("disposable is not using")
    using disposable = g()
    console.log("disposable is using")
}
console.log("disposable is disposed")
