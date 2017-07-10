import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SIZE = 150
const PADDING = 5
const STEP = 0.05

class Graph extends React.Component {
    componentDidMount() {
        this.paint()
    }

    componentDidUpdate() {
        this.paint()
    }

    paint() {
        const htmlCanvas = ReactDOM.findDOMNode(this)
        const canvas = htmlCanvas.getContext('2d')
        const y = this.props.y

        canvas.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height)

        canvas.save()
        canvas.translate(0, htmlCanvas.height)
        canvas.scale(1, -1)
        canvas.translate(PADDING + 0.5, PADDING + 0.5)

        canvas.beginPath()
        canvas.moveTo(0, 0)
        canvas.lineTo(0, SIZE)
        canvas.moveTo(0, 0)
        canvas.lineTo(SIZE, 0)

        canvas.lineWidth = 1
        canvas.strokeStyle = 'rgba(46, 52, 54, 0.91)'
        canvas.stroke()

        canvas.beginPath()
        canvas.moveTo(6, 6)
        canvas.lineTo(SIZE, SIZE)

        canvas.setLineDash([9, 9])
        canvas.stroke()
        canvas.setLineDash([])

        canvas.beginPath()
        canvas.moveTo(0, 0)

        for (let t = STEP; t < 1; t += STEP) {
            canvas.lineTo(t * SIZE, y(t) * SIZE)
        }

        canvas.lineTo(SIZE, SIZE)

        canvas.lineWidth = 2
        canvas.strokeStyle = '#ef2929'
        canvas.stroke()

        canvas.restore()
    }

    render() {
        const paddedSize = SIZE + PADDING + PADDING
        return <canvas className="graph" height={paddedSize} width={paddedSize} />
    }
}

Graph.propTypes = {
    y: PropTypes.func.isRequired,
}

export default Graph
