import React from 'react'
import Head from 'next/head'

import Content from '../build/(* page *)'
import { loadFonts } from '../util/fonts'

export default class extends React.Component {
    componentDidMount() {
        loadFonts()
    }

    render() {
        return (
            <main>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Mark Vasilkov</title>
                    <link rel="stylesheet" href="/static/master.css" />
                </Head>
                <Content />
            </main>
        )
    }
}
