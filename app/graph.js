import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SIZE = 200
const STEP = 0.05

class Graph extends React.Component {
    componentDidMount() {
        this.paint()
    }

    componentDidUpdate() {
        this.paint()
    }

    paint() {
        const canvas = ReactDOM.findDOMNode(this).getContext('2d')
        const x = this.props.x

        canvas.save()
        canvas.translate(0, SIZE)
        canvas.scale(1, -1)

        canvas.clearRect(0, 0, SIZE, SIZE)

        canvas.beginPath()
        canvas.moveTo(0, 0)
        canvas.lineTo(0, SIZE)
        canvas.moveTo(0, 0)
        canvas.lineTo(SIZE, 0)

        canvas.lineWidth = 1
        canvas.strokeStyle = '#2e3436'
        canvas.stroke()

        canvas.beginPath()
        canvas.moveTo(0, 0)

        for (let t = STEP; t < SIZE; t += STEP) {
            canvas.lineTo(t * SIZE, x(t) * SIZE)
        }

        canvas.lineTo(SIZE, SIZE)

        canvas.lineWidth = 2
        canvas.strokeStyle = '#ef2929'
        canvas.stroke()

        canvas.restore()
    }

    render() {
        return <canvas height={SIZE} width={SIZE} />
    }
}

Graph.propTypes = {
    x: PropTypes.func.isRequired,
}

export default Graph
