'use strict'
/* Linear interpolation */

// region lerpFast
function lerpFast(a, b, t) {
    return a + (b - a) * t
}
// endregion

// region lerp
function lerp(a, b, t) {
    return a * (1 - t) + b * t
}
// endregion

export { lerpFast, lerp }
