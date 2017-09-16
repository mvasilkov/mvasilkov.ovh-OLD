import { makePoints } from './fractal_sub'

const CANVAS_SIZE = 500
const ITERATIONS = 7
const R0 = 40
const R1 = 48

function pattern(canvas) {
    loop((x, y) => {
        canvas.beginPath()
        canvas.arc(x, y, R0, 0, Math.PI * 2)
        canvas.stroke()
    })
}

function circles(canvas) {
    loop((x, y) => {
        canvas.save()
        canvas.translate(x, y)

        canvas.beginPath()
        circle(canvas, makePoints(ITERATIONS), R0, R1)
        canvas.closePath()
        canvas.stroke()

        canvas.restore()
    })
}

function loop(paint) {
    for (let i = 0; i < 5; ++i) {
        const x = (i * 2 + 1) * CANVAS_SIZE * 0.1

        for (let j = 0; j < 5; ++j) {
            const y = (j * 2 + 1) * CANVAS_SIZE * 0.1

            paint(x, y)
        }
    }
}

function circle(canvas, p, r0, r1) {
    const phase = Math.PI * 2 * Math.random()
    const scale = r1 - r0

    while (p) {
        const a = phase + p.x * Math.PI * 2
        const b = r0 + p.y * scale

        canvas.lineTo(b * Math.cos(a), b * Math.sin(a))

        p = p.next
    }
}

export { CANVAS_SIZE, pattern, circles }
