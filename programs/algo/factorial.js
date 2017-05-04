'use strict'
/* Bad factorial, recursive and iterative. */

function assert(a, b) {
    if (!a) throw new Error(b)
}

// region factorial
function factorial(n) {
    assert(Number.isInteger(n) && n >= 0,
        `I wanted a non-negative integer argument, got ${n}.`)

    let a = 1
    while (n >= 2) {
        a *= n
        --n
    }
    return a
}
// endregion

// region recursiveFactorial
function recursiveFactorial(n) {
    assert(Number.isInteger(n) && n >= 0,
        `I wanted a non-negative integer argument, got ${n}.`)

    if (n < 2) return 1

    return n * recursiveFactorial(n - 1)
}
// endregion

if (require.main === module) {
    const assert = require('assert')
    const known = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800,
        39916800, 479001600, 6227020800, 87178291200, 1307674368000,
        20922789888000, 355687428096000, 6402373705728000]

    known.forEach(function (value, index) {
        assert.strictEqual(factorial(index), value)
        assert.strictEqual(recursiveFactorial(index), value)
    })
}
