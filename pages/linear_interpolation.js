import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import prog from '../build/prog/basic/lerp'

export const pageTitle = 'Linear interpolation (lerp)'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle} meta="linear_interpolation">
                <header>
                    <h1>Linear interpolation</h1>
                    <p>aka lerp</p>
                </header>

                <h4>Fast (imprecise) lerp function</h4>
                <Listing program={prog} region="lerpFast" />
                <p>This variant is susceptible to floating-point error, for example:</p>
                <pre className="listing">
                    <code>lerpFast(0.4, 0.1, 1){'\n'}</code>
                    <code>/* returns 0.09999999999999998 instead of 0.1 */{'\n'}</code>
                </pre>

                <h4>Standard (precise) lerp function</h4>
                <Listing program={prog} region="lerp" />
            </Article>
        )
    }
}

export default Content
