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

function easeInOutQuad(t) {
    return t < 0.5 ?
        2 * t * t :
        2 * t * (2 - t) - 1
}
// endregion

// region cubic
function easeInCubic(t) {
    return t * t * t
}

function easeOutCubic(t) {
    --t
    return t * t * t + 1
}

const easeInOutCubic = easeInOut(easeInCubic)
// endregion

// region sine
function easeInSine(t) {
    return 1 - Math.cos(t * Math.PI * 0.5)
}

function easeOutSine(t) {
    return Math.sin(t * Math.PI * 0.5)
}

function easeInOutSine(t) {
    return (1 - Math.cos(t * Math.PI)) * 0.5
}
// endregion

// region util
/* Run an easing function backwards */
function easeOut(easing) {
    return function (t) {
        return 1 - easing(1 - t)
    }
}

/* Make an easing function symmetrical */
function easeInOut(easing) {
    return function (t) {
        if (t < 0.5) {
            return easing(t * 2) * 0.5
        }
        return 1 - easing((1 - t) * 2) * 0.5
    }
}
// endregion

export {
    linear,
    easeInQuad, easeOutQuad, easeInOutQuad,
    easeInCubic, easeOutCubic, easeInOutCubic,
    easeInSine, easeOutSine, easeInOutSine,
}
