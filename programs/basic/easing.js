'use strict'
/* Easing functions */

// region linear
function linear(t) {
    return t
}
// endregion

// region easeInQuad
function easeInQuad(t) {
    return t * t
}
// endregion

// region easeOutQuad
function easeOutQuad(t) {
    return t * (2 - t)
}
// endregion

export { linear, easeInQuad, easeOutQuad }
