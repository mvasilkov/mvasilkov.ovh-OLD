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
                <Listing program={prog} region="main" />
                <p>This is what it outputs:</p>
                <Listing program={[
                    '97.0',
                    'class java.lang.Float',
                ]} />
                <p>Because of course it does.</p>
            </Article>
        )
    }
}

export default Content
