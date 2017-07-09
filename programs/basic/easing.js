'use strict'
/* Easing functions */

// region linear
function linear(t) {
    return t
}
// endregion

// region quad
function easeInQuad(t) {
    return t * t
}

function easeOutQuad(t) {
    return t * (2 - t)
}
// endregion

export { linear, easeInQuad, easeOutQuad }
