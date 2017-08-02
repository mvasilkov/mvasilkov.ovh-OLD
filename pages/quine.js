import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import progJS from '../build/prog/basic/quine'
import progPython from '../build/prog/basic/quine_py'
import progJava from '../build/prog/basic/Main_java'

export const pageTitle = 'Quine (self-reproducing) programs'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle} meta="quine">
                <header>
                    <h1>Self-reproducing programs</h1>
                    <p>Quine: a program producing its complete source code as its only output</p>
                </header>

                <h4>A Python quine, using <em>repr</em> for escaping</h4>
                <Listing program={progPython} />

                <h4>Same thing in JavaScript via JSON formatting</h4>
                <Listing program={progJS} />

                <h4>A Java quine, using ASCII codes</h4>
                <Listing program={progJava} />
                <p>The positional arguments are as follows:</p>
                <pre className="listing">
                    <code>%11$c = 0xa = '\n'<br /></code>
                    <code>%12$c = 0x22 = '"'<br /></code>
                </pre>
            </Article>
        )
    }
}

export default Content
