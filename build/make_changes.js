const assert = require('assert')
const jsonfile = require('jsonfile')
const sh = require('shelljs')

const gitCommandLine = 'git log --follow -1 --pretty=medium --date=unix'

const ignorePages = {
    '_changes.js': true,
}

function setup() {
    assert(sh.which('git'))

    require('babel-register')({
        presets: ['next/babel'],
        plugins: ['transform-es2015-modules-commonjs'],
    })
}

function getDate(p) {
    const a = sh.exec(`${gitCommandLine} pages/${p}`, { silent: true })
    assert(a.code === 0)

    const b = a.stdout.match(/^Date:\s+(\d+)/m)
    assert(b && b[1])

    return +b[1]
}

function getDefaultTitle() {
    const Article = require('../app/article').default
    return Article.defaultProps.title
}

function getTitle(p, defaultTitle) {
    const pageTitle = require(`../pages/${p}`).pageTitle
    return pageTitle || defaultTitle
}

function compare(a, b) {
    if (a.pubdate == b.pubdate)
        return a.title.localeCompare(b.title, 'en-US')

    return b.pubdate - a.pubdate
}

if (require.main === module) {
    setup()

    const defaultTitle = getDefaultTitle()
    assert(defaultTitle)

    const changes = []

    for (let p of sh.ls('pages')) {
        if (p in ignorePages)
            continue

        console.log(p)

        changes.push({
            path: p,
            pubdate: getDate(p),
            title: getTitle(p, defaultTitle),
        })
    }

    changes.sort(compare)

    jsonfile.writeFileSync('build/changes.json', changes, { spaces: 2 })
}
