import React, { Component } from 'react';
import { PortfolioElement } from '..'
import CardGroup from 'react-bootstrap/CardGroup'

export default class Portfolio extends Component {

    render() {
        return (
            <CardGroup>
                <div >
                    <div className="d-flex flex-row flex-wrap pt-4">
                        {this.props.projects.map((p, index) => (
                            <div key={p + index}>
                                < div >
                                    <PortfolioElement
                                        project={p}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardGroup>
        )
    }
}