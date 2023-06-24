require('disposablestack/auto');

const g = (name) => ({
    [Symbol.dispose]() {
        console.log('dispose', name);
        (this.dep || (() => {}))[Symbol.dispose]()
    }
})

using g1 = g("first")
using g2 = g("second")
g1.dep = g2
g2.dep = g1
