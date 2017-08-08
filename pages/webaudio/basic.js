import React from 'react'
import Article from '../../app/article'

export const pageTitle = 'Web audio basics: an oscillator'

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            audio: null,
            oscillator: null,
            playing: false,
        }

        this.playPause = this.playPause.bind(this)
    }

    componentDidMount() {
        this.setState({ audio: new AudioContext })
    }

    componentWillUnmount() {
        const { audio, oscillator } = this.state
        if (oscillator) oscillator.stop(audio.currentTime)
        if (audio) audio.close()
    }

    playPause() {
        let { audio, oscillator, playing } = this.state

        if (playing) {
            if (oscillator) {
                oscillator.stop(audio.currentTime)
                oscillator = null
            }
            playing = false
        }
        else if (audio) {
            oscillator = audio.createOscillator()
            oscillator.connect(audio.destination)
            oscillator.start(audio.currentTime)
            playing = true
        }

        this.setState({ oscillator, playing })
    }

    render() {
        const { audio, playing } = this.state
        const disabled = audio == null

        return (
            <Article title={pageTitle} meta="webaudio/basic">
                <header>
                    <h1>{pageTitle}</h1>
                </header>
                <p>
                    <button disabled={disabled} onClick={this.playPause}>
                        {playing ? 'Pause' : 'Play'}
                    </button>
                </p>
            </Article>
        )
    }
}

export default Content
