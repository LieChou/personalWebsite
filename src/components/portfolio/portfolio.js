import React, { Component } from 'react';
import { PortfolioElement } from '..'
import CardGroup from 'react-bootstrap/CardGroup'
import ScrollUpButton from "react-scroll-up-button"


export default class Portfolio extends Component {

    render() {
        return (
            <CardGroup>
                <div>
                    <div className="d-flex flex-row flex-wrap pt-5 pr-5" style={{ width: "90%", height: "100vh", margin: "auto" }} >
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
                <div>
                    <ScrollUpButton
                        style={{ background: "#4bacc6" }}
                    />
                </div>

            </CardGroup>
        )
    }
}