import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

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
                    <link rel="icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="/static/master.css" />
                </Head>
                {this.props.nav && this.nav()}
                {this.props.children}
            </article>
        )
    }

    nav() {
        return (
            <nav>
                <Link href="/"><a>Start page</a></Link>
            </nav>
        )
    }
}

Article.defaultProps = {
    nav: true,
    title: 'Mark Vasilkov',
}

export default Article
