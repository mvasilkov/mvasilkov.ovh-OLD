import React from 'react'
import Article from '../app/article'
import Listing from '../app/listing'

import prog from '../build/prog/basic/iterator_last_py'

export const pageTitle = 'Get the last item from an iterator in Python'

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h2>{pageTitle}</h2>
                </header>
                <p>Use a <em>deque</em> of size 1.</p>
                <Listing program={prog} region="last" />
            </Article>
        )
    }
}

export default Content
