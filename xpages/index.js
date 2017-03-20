import React from 'react'

const email = '(* email *)'

export default class extends React.Component {
    render() {
        return (
            <article>
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
