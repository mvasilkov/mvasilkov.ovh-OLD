import React from 'react'
import Article from '../../app/article'
import Listing from '../../app/listing'

import prog from '../../build/prog/algo/factorial'

export const pageTitle = 'Naïve JavaScript factorial'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                </header>
                <p>In order of decreasing performance:</p>
                <h4>An iterative factorial function with an accumulator variable</h4>
                <Listing program={prog} region="factorial" />
                <h4>A recursive factorial function</h4>
                <Listing program={prog} region="recursiveFactorial" />
            </Article>
        )
    }
}

export default Content
