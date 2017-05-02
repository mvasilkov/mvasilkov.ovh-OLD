import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import prog from '../build/prog/wtf/Program_java'

export const pageTitle = 'Java type promotion WTF'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                    <p>Sufficiently advanced Java is indistinguishable from satire.</p>
                </header>
                <p>Consider the following program:</p>
                <Listing program={prog} />
                <p>This is what it outputs:</p>
                <pre className="listing">
                    <code>97.0{'\n'}</code>
                    <code>class java.lang.Float{'\n'}</code>
                </pre>
                <p>Because of course it does.</p>
            </Article>
        )
    }
}

export default Content
