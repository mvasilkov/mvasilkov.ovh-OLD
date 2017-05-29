import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import progJS from '../build/prog/basic/quine'
import progPython from '../build/prog/basic/quine_py'

export const pageTitle = 'Quine (self-reproducing) programs'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>Self-reproducing programs</h1>
                    <p>Quine: a program producing its complete source code as its only output</p>
                </header>
                <h4>A Python quine, using <em>repr</em> for escaping</h4>
                <Listing program={progPython} />
                <h4>Same thing in JavaScript via JSON formatting</h4>
                <Listing program={progJS} />
            </Article>
        )
    }
}

export default Content
