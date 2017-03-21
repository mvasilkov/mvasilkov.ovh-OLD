import React from 'react'
import Head from 'next/head'

import { loadFonts } from './fonts'

class Article extends React.Component {
    componentDidMount() {
        loadFonts()
    }

    render() {
        return (
            <article>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/static/master.css" />
                </Head>
                {this.props.children}
            </article>
        )
    }
}

Article.defaultProps = {
    title: 'Mark Vasilkov',
}

export default Article
