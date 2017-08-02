import { lerpFast, lerp } from '../programs/basic/lerp'
import test from 'ava'

test('lerpFast', t => {
    t.is(lerpFast(2, 4, 0), 2)
    t.is(lerpFast(2, 4, 0.5), 3)
    t.is(lerpFast(2, 4, 1), 4)
    /* FP error in lerpFast */
    t.not(lerpFast(0.4, 0.1, 1), 0.1)
})

test('lerp', t => {
    t.is(lerp(2, 4, 0), 2)
    t.is(lerp(2, 4, 0.5), 3)
    t.is(lerp(2, 4, 1), 4)
    /* FP error in lerpFast */
    t.is(lerp(0.4, 0.1, 1), 0.1)
})
