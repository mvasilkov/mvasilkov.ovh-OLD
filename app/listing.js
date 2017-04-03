import React from 'react'

class Listing extends React.Component {
    render() {
        const p = this.props.program

        return (
            <pre>
                {p.lines.map((line, n) => <code key={n}>{`${line}\n`}</code>)}
            </pre>
        )
    }
}

Listing.propTypes = {
    program: React.PropTypes.object,
}

export default Listing
