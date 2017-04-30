import React from 'react'
import Link from 'next/link'

import format from 'date-fns/format'

const Line = ({ path, pubdate, title }) => (
    <code className="line">
        <Link href={`/${path}`}><a>{title}</a></Link>
        <span className="date"> {format(pubdate * 1000, 'YYYY-MM-DD')}</span>
    </code>
)

const Changelog = ({ changes, orderBy }) => (
    <pre className="changelog">
        {changes.map(ch =>
            <Line key={ch.path} {...ch} pubdate={ch[orderBy]} />)}
    </pre>
)

export default Changelog
