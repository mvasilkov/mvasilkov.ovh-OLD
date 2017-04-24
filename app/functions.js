export default function comparator(propertyName) {
    return function compare(a, b) {
        if (a[propertyName] == b[propertyName])
            return a.title.localeCompare(b.title, 'en-US')

        return b[propertyName] - a[propertyName]
    }
}
