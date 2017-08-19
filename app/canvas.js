import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Canvas extends React.Component {
    componentDidMount() { this.paint() }

    componentDidUpdate() { this.paint() }

    paint() {
        const { height, width, paint } = this.props
        const pixelRatio = 2 /* HiDPI Canvas */
        const htmlCanvas = ReactDOM.findDOMNode(this)
        const canvas = htmlCanvas.getContext('2d')

        canvas.clearRect(0, 0,
            htmlCanvas.width = width * pixelRatio,
            htmlCanvas.height = height * pixelRatio)

        canvas.save()
        canvas.translate(0, htmlCanvas.height)
        canvas.scale(pixelRatio, -pixelRatio)
        canvas.translate(0.5, 0.5)

        paint(canvas)

        canvas.restore()
    }

    render() {
        const { height, width, onClick } = this.props
        return <canvas className="canvas" style={{ height, width }} onClick={onClick} />
    }
}

Canvas.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    paint: PropTypes.func.isRequired,
    onClick: PropTypes.func,
}

export default Canvas
