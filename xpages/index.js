import React from 'react'
import Article from '../javascripts/article'

const email = '(* email *)'

class Content extends React.Component {
    render() {
        return (
            <Article>
                <header>
                    <h1>Mark Vasilkov</h1>
                    <p>Computer programmer from Israel</p>
                </header>
                <p>I work in Python, Django, JavaScript, and React.</p>
                <p>Write to me: <span dangerouslySetInnerHTML={{ __html: email }}></span></p>
            </Article>
        )
    }
}

export default Content
