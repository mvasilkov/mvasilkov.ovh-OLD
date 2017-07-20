const he = require('he')
const jsonfile = require('jsonfile')

function encode(string) {
    return he.encode(string, { encodeEverything: true })
}

if (require.main === module) {
    const mailto = encode('mailto:')
    const email = encode('mvasilkov\u002bovh\u0040gmail.com')

    const obj = { __html: `<a href="${mailto}${email}">${email}</a>` }
    jsonfile.writeFileSync('build/email.json', obj, { spaces: 2 })
}
