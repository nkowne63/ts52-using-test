require('disposablestack/auto');
const { setTimeout } = require('timers/promises');

const g = () => ({
    [Symbol.dispose]() {
        console.log('dispose self');
    }
})

const main = async () => {
  using disposable = g()
  console.log("after using")
  await setTimeout(10000)
  console.log("after 10000 ms")
}

main()