/* Fractal subdivision */
function makePoints(iterations) {
    const end = { x: 1, y: 1, next: null }
    const head = { x: 0, y: 1, next: end }
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

export { makePoints }
