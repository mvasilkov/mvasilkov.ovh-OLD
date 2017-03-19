import React from 'react'
import Head from 'next/head'

import { loadFonts } from '../util/fonts'

const email = '<a href="mailto:&#x6d;&#x76;&#x61;&#x73;&#x69;&#x6c;&#x6b;&#x6f;&#x76;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;">&#x6d;&#x76;&#x61;&#x73;&#x69;&#x6c;&#x6b;&#x6f;&#x76;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;</a>'

export default class extends React.Component {
    componentDidMount() {
        loadFonts()
    }

    render() {
        return (
            <article>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Mark Vasilkov</title>
                    <link rel="stylesheet" href="/static/master.css" />
                </Head>
                <header>
                    <h1>Mark Vasilkov</h1>
                    <p>Computer programmer from Israel</p>
                </header>
                <p>I work in Python, Django, JavaScript, and React.</p>
                <p>Write to me: <span dangerouslySetInnerHTML={{ __html: email }}></span></p>
            </article>
        )
    }
}
