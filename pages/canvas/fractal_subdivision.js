import React from 'react'
import Article from '../../app/article'
import Canvas from '../../app/canvas'
import Listing from '../../app/listing'

import * as circles from '../../programs/canvas/circles'

export const pageTitle = 'The fractal subdivision algorithm'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle} meta="canvas/fractal_subdivision">
                <header>
                    <h2>{pageTitle}</h2>
                </header>

                <Canvas height={circles.CANVAS_SIZE} width={circles.CANVAS_SIZE} paint={paint}
                    onClick={event => { this.canvas && this.canvas.forceUpdate() }}
                    ref={component => { this.canvas = component }} />

                <p>Click on the canvas to refresh.</p>
            </Article>
        )
    }
}

function paint(canvas) {
    canvas.lineWidth = 1
    canvas.setLineDash([9, 9])
    canvas.strokeStyle = 'rgba(46, 52, 54, 0.91)'

    circles.pattern(canvas)

    canvas.lineWidth = 2
    canvas.setLineDash([])
    canvas.strokeStyle = '#ef2929'

    circles.circles(canvas)
}

export default Content
