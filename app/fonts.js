import FontFaceObserver from 'fontfaceobserver'
import { loadCSS } from 'fg-loadcss'

let _loading = false

function _loadFont(family, variant) {
    return (new FontFaceObserver(family, variant)).load()
}

export function loadFonts() {
    if (_loading || document.body.classList.contains('web-fonts-loaded'))
        return

    const fonts = [
        _loadFont('Open Sans', { weight: 700 }),
        _loadFont('Noto Serif'),
        _loadFont('Noto Serif', { style: 'italic' })]

    Promise.all(fonts).then(() => {
        document.body.classList.add('web-fonts-loaded')
        _loading = false
    })

    loadCSS('//fonts.googleapis.com/css?family=Open+Sans:700')
    loadCSS('//fonts.googleapis.com/css?family=Noto+Serif:400,400i')
    _loading = true
}
