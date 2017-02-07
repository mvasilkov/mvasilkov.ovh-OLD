import React from 'react'
import Head from 'next/head'

import { loadFonts } from '../util/fonts'

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
                <p>I do Python, Django, JavaScript, Node.js, and React.</p>
            </article>
        )
    }
}
