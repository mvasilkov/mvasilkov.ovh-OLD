const CANVAS_SIZE = 500
const ITERATIONS = 7
const R = CANVAS_SIZE * 0.08
const S = 8

const PIPI = Math.PI * 2

function pattern(canvas) {
    loop((x, y) => {
        canvas.beginPath()
        canvas.arc(x, y, R, 0, PIPI)
        canvas.stroke()
    })
}

function circles(canvas) {
    loop((x, y) => {
        canvas.save()
        canvas.translate(x, y)

        canvas.beginPath()
        circle(canvas, ITERATIONS, R, S)
        canvas.stroke()

        canvas.restore()
    })
}

function loop(callback) {
    for (let i = 0; i < 5; ++i) {
        const x = (i * 2 + 1) * CANVAS_SIZE * 0.1

        for (let j = 0; j < 5; ++j) {
            const y = (j * 2 + 1) * CANVAS_SIZE * 0.1

            callback(x, y)
        }
    }
}

function makePoints(iterations) {
    const tail = { x: 1, y: 1, next: null }
    const head = { x: 0, y: 1, next: tail }
    let min = 1
    let max = 1

    for (let i = iterations; i; --i) {
        let p = head
        while (p.next) {
            const sign = Math.random() < 0.5 ? -1 : 1
            const a = sign * Math.random() * (p.next.x - p.x)

            p.next = {
                x: 0.5 * (p.x + p.next.x),
                y: 0.5 * (p.y + p.next.y) + a,
                next: p.next,
            }

            min = Math.min(min, p.next.y)
            max = Math.max(max, p.next.y)

            p = p.next.next
        }
    }

    if (min == max) {
        // straight line y = 1
        for (let p = head; p; p = p.next) {
            p.y = 1
        }
    }
    else {
        // normalize y to [0, 1]
        const k = max - min
        for (let p = head; p; p = p.next) {
            p.y = (p.y - min) / k
        }
    }

    return head
}

function circle(canvas, iterations, r, s) {
    let p = makePoints(iterations)
    const phase = PIPI * Math.random()

    while (p) {
        const a = phase + p.x * PIPI
        const b = r + p.y * s

        canvas.lineTo(b * Math.cos(a), b * Math.sin(a))

        p = p.next
    }
}

export { CANVAS_SIZE, pattern, circles }
