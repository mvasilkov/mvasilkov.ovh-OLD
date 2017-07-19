import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'
import Graph from '../app/graph'

import * as fun from '../programs/basic/easing'
import prog from '../build/prog/basic/easing'

export const pageTitle = 'Easing functions'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                    <p>Easing functions specify the rate of change of a parameter over time.</p>
                </header>

                <h4>Linear interpolation</h4>
                <Graph y={fun.linear} />
                <Listing program={prog} region="linear" />

                <h4>Quadratic easing</h4>
                <div className="row">
                    <Graph y={fun.easeInQuad} />
                    <Graph y={fun.easeOutQuad} />
                    <Graph y={fun.easeInOutQuad} />
                </div>
                <Listing program={prog} region="quad" />

                <h4>Utility functions</h4>
                <Listing program={prog} region="util" />
            </Article>
        )
    }
}

export default Content
