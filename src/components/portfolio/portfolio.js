import React, { Component } from 'react';
import { PortfolioElement } from '././portfolioElement/portfolioElement'

export default class Portfolio extends Component {

    render() {
        return (
            <div>
                {this.props.projects.map((p, index) => (
                    <div>
                        <PortfolioElement
                            projects={this.props.projects}
                        />
                    </div>
                ))}
            </div>
        )
    }
}