const indentation = RegExp('^[ \t]*(?=[^ \t])')

export default function noindent(lines) {
    const level = Math.min(...lines.map(function (line) {
        const a = line.match(indentation)
        if (a) return a[0].length
        /* Empty lines are orthogonal to the level of indentation */
        return Infinity
    }))

    if (isFinite(level) && level > 0) {
        const remove = RegExp(`^[ \t]{${level}}`)
        return lines.map(function (line) {
            return line.replace(remove, '')
        })
    }

    return lines
}
