import React from 'react'
import Article from '../app/article'

export const pageTitle = "Goodhart's law, Campbell's law"

class Content extends React.Component {
    render() {
        return (
            <Article title={pageTitle}>
                <header>
                    <h2>{pageTitle}</h2>
                    <p>When a measure becomes a target, it ceases to be a good measure.</p>
                </header>

                <h4>Goodhart's law</h4>
                <p>Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.</p>

                <h4>Paraphrased by Biagioli</h4>
                <p>When a feature of the economy is picked as an indicator of the economy, then it inexorably ceases to function as that indicator because people start to game it.</p>

                <h4>Campbell's law</h4>
                <p>The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures, and the more apt it will be to distort and corrupt the social processes it is intended to monitor.</p>
            </Article>
        )
    }
}

export default Content
