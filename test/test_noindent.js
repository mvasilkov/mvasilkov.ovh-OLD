import noindent from '../app/noindent'
import test from 'ava'

const a = `
    let a = 1
    while (n >= 2) {
        a *= n
        --n
    }
`.split('\n')

const b = `
let a = 1
while (n >= 2) {
    a *= n
    --n
}
`.split('\n')

test('noindent', t => {
    t.deepEqual(noindent([]), [])
    t.deepEqual(noindent(['']), [''])
    t.deepEqual(noindent(['a']), ['a'])
    t.deepEqual(noindent(['a', '']), ['a', ''])
    t.deepEqual(noindent(['    a']), ['a'])
    t.deepEqual(noindent(['    a', '']), ['a', ''])

    t.deepEqual(noindent(a), b)
})
