import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class PortfolioElement extends Component {

    render() {
        return (
            <div>
                <Card border="white" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={require('../../../pics' + this.props.project.image)} />
                    <Card.Body>
                        <Card.Title >{this.props.project.title}</Card.Title>
                        <Card.Text >
                            {this.props.project.technos}
                        </Card.Text>
                        <Button variant="outline-dark" size="lg">En savoir plus</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}