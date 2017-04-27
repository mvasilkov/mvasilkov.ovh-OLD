import React from 'react'
import Article from '../app/article'
import Changelog from '../app/changelog'

import { comparator } from '../app/functions'
import changes from '../build/changes'

export const pageTitle = 'Contents'

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            changes,
            orderBy: 'created',
        }

        this.comp = {
            created: comparator('created'),
            updated: comparator('updated'),
        }

        this.changeOrdering = this.changeOrdering.bind(this)
    }

    changeOrdering(event) {
        const orderBy = event.target.value
        const changes = this.state.changes.sort(this.comp[orderBy])

        this.setState({ changes, orderBy })
    }

    render() {
        return (
            <Article nav={pageTitle.toLowerCase()} title={pageTitle}>
                <header>
                    <h1>{pageTitle}</h1>
                    <pre>
                        <code>ORDER BY {this.select()} DESC</code>
                    </pre>
                </header>
                <Changelog changes={changes} orderBy={this.state.orderBy} />
            </Article>
        )
    }

    select() {
        return (
            <select value={this.state.orderBy} onChange={this.changeOrdering}>
                <option value="created">created</option>
                <option value="updated">updated</option>
            </select>
        )
    }
}

export default Content
