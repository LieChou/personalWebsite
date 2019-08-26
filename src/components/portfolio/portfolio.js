import React, { Component } from 'react';
import { PortfolioElement } from '..'

export default class Portfolio extends Component {

    render() {
        return (
            <div>
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
        )
    }
}