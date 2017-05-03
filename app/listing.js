import React from 'react'
import PropTypes from 'prop-types'

import multili from 'multili'

class Listing extends React.Component {
    render() {
        const { program: p, region } = this.props
        let lines = Array.isArray(p) ? p : p.lines

        if (region) {
            const { a, b } = p.regions[region]
            lines = multili(lines.slice(a, b))
        }

        return (
            <pre className="listing">
                {lines.map((line, n) => <code key={n}>{`${line}\n`}</code>)}
            </pre>
        )
    }
}

Listing.propTypes = {
    program: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,

    region: PropTypes.string,
}

export default Listing
