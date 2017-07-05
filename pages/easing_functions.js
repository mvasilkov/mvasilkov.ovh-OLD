import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'
import Graph from '../app/graph'

import { linear, easeInQuad, easeOutQuad } from '../programs/basic/easing'
import prog from '../build/prog/basic/easing'

export const pageTitle = 'Easing functions'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                </header>
                <p>Easing functions specify the rate of change of a parameter over time.</p>

                <h4>Linear interpolation</h4>
                <Graph x={linear} />
                <Listing program={prog} region="linear" />

                <h4>Linear interpolation</h4>
                <Graph x={easeInQuad} />
                <Listing program={prog} region="easeInQuad" />

                <h4>Linear interpolation</h4>
                <Graph x={easeOutQuad} />
                <Listing program={prog} region="easeOutQuad" />
            </Article>
        )
    }
}

export default Content
