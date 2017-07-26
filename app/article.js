import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { loadFonts } from './fonts'
import Postmeta from './postmeta'

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
                {this.props.meta && <Postmeta path={this.props.meta} />}
            </article>
        )
    }

    nav() {
        return (
            <nav>
                <Link href="/"><a>Start page</a></Link>
                {this.props.nav != 'contents' &&
                    <Link href="/contents"><a>Contents</a></Link>}
            </nav>
        )
    }
}

Article.defaultProps = {
    meta: null,
    nav: true,
    title: 'Mark Vasilkov',
}

export default Article
