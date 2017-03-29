import React from 'react'
import Article from '../app/article'

export const pageTitle = "Node.js counterpart of Python's __name__ == '__main__'"

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h2>Node.js counterpart of Python's <code className="nowrap">__name__ == '__main__'</code></h2>
                </header>
            </Article>
        )
    }
}

export default Content
