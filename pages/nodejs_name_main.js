import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import progJS from '../build/prog/basic/entry_point'
import progPython from '../build/prog/basic/entry_point_py'

export const pageTitle = "Node.js counterpart of Python's __name__ == '__main__'"

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h2>Node.js counterpart of Python's <code className="nowrap">__name__ == '__main__'</code></h2>
                </header>
                <p>The following programs are roughly equivalent:</p>
                <h4>Python</h4>
                <Listing program={progPython} />
                <h4>JavaScript of the Node.js variety</h4>
                <Listing program={progJS} />
                <p><a href="https://nodejs.org/api/modules.html">Docs</a></p>
            </Article>
        )
    }
}

export default Content
