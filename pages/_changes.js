import React from 'react'
import Article from '../app/article'
import Changelog from '../app/changelog'

import changes from '../build/changes'

export const pageTitle = 'Changelog'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                </header>
                <Changelog changes={changes} />
            </Article>
        )
    }
}

export default Content
