import FontFaceObserver from 'fontfaceobserver'
import { loadCSS } from 'fg-loadcss'

let _loading = false

export function loadFonts() {
    if (_loading || document.body.classList.contains('open-sans-loaded'))
        return

    (new FontFaceObserver('Open Sans')).load().then(() => {
        document.body.classList.add('open-sans-loaded')
        _loading = false
    })

    loadCSS('//fonts.googleapis.com/css?family=Open+Sans:400,700')
    _loading = true
}
