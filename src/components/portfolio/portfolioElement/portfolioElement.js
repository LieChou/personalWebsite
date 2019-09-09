import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class PortfolioElement extends Component {

    render() {
        return (
            <div>
                <Card border="white" style={{ width: 'auto' }}>
                    <Card.Img variant="top" src={require('../../../pics' + this.props.project.image)} />
                    <Card.Body>
                        <div className="d-flex flex-row" >
                            <div className="col-lg-10">
                                <Card.Title >{this.props.project.title}</Card.Title>
                                <Card.Text >
                                    {this.props.project.technos}
                                </Card.Text>
                            </div>
                            <div className="col-lg-2">
                                <Button href={this.props.project.url} variant="outline-info" size="lg" target="_blank">Visiter</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}