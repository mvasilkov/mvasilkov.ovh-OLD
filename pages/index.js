import React from 'react'
import Link from 'next/link'
import Article from '../app/article'

import email from '../build/email'

export const pageTitle = 'Start page'

class Content extends React.Component {
    render() {
        return (
            <Article nav={false}>
                <header>
                    <h1>Mark Vasilkov</h1>
                    <p>Computer programmer from Israel</p>
                </header>
                <p>I work in Python, Django, JavaScript, and React.</p>
                <p>Write to me: <span dangerouslySetInnerHTML={email}></span></p>
                <hr />
                <p>This is my personal home page.</p>
                <p><Link href="/contents"><a>Contents</a></Link></p>
            </Article>
        )
    }
}

export default Content
