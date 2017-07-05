import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'
import Graph from '../app/graph'

import { linear } from '../programs/basic/easing'
import prog from '../build/prog/basic/easing'

export const pageTitle = 'Easing functions'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                </header>
                <p>Easing functions specify the rate of change of a parameter over time, and allow you to apply custom mathematical formulas to your animations.</p>
                <h4>Linear</h4>
                <Graph x={linear} />
                <Listing program={prog} region="linear" />
            </Article>
        )
    }
}

export default Content
