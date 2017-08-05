import React from 'react'
import PropTypes from 'prop-types'

import format from 'date-fns/format'

import changes from '../build/changes'

const meta = {}

function init() {
    for (let ch of changes) {
        meta[ch.path] = ch
    }
}

function pubdate(a) {
    return format(a * 1000, 'YYYY-MM-DD')
}

class Postmeta extends React.Component {
    constructor(props) {
        super(props)

        if (Object.keys(meta).length)
            return

        init()
    }

    render() {
        const { path } = this.props
        const postmeta = meta[path]
        const github = `https://github.com/mvasilkov/mvasilkov.ovh/blob/master/pages/${path}.js`

        if (!postmeta) {
            // throw new Error('Bad path: ' + path)
            return null
        }

        const { created, updated } = postmeta

        return (
            <ul className="postmeta">
                <li>Created: {pubdate(created)}</li>
                {created == updated || <li>Updated: {pubdate(updated)}</li>}
                <li><a href={github}>Edit this page</a></li>
            </ul>
        )
    }
}

Postmeta.propTypes = {
    path: PropTypes.string.isRequired,
}

export default Postmeta
