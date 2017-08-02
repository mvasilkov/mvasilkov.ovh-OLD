import eol from 'eol'
import fs from 'fs'
import sh from 'shelljs'
import test from 'ava'

const python = sh.which('python3') ? 'python3' : 'python'
const quineJS = 'programs/basic/quine.js'
const quinePython = 'programs/basic/quine.py'
const quineJava = 'programs/basic/Program.java'

test('Python quine', t => {
    const a = sh.exec(`${python} ${quinePython}`, { silent: true })
    t.is(a.code, 0)
    const b = fs.readFileSync(quinePython, { encoding: 'utf-8' })
    t.is(a.stdout, b)
})

test('JS quine', t => {
    const a = sh.exec(`node ${quineJS}`, { silent: true })
    t.is(a.code, 0)

    if (process.platform.startsWith('win')) {
        a.stdout = eol.crlf(a.stdout)
    }

    const b = fs.readFileSync(quineJS, { encoding: 'utf-8' })
    t.is(a.stdout, b)
})

test('Java quine', t => {
    const a = sh.exec(`build/run_java.sh ${quineJava} ovh.mvasilkov.java.quine.Program`,
        { silent: true })
    t.is(a.code, 0)
    const b = fs.readFileSync(quineJava, { encoding: 'utf-8' })
    t.is(a.stdout, b)
})
