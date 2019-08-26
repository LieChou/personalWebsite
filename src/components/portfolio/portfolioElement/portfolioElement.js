import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class PortfolioElement extends Component {

    render() {
        return (
            <div>
                <Card style={{ width: 'auto' }}>
                    <Card.Img variant="top" src={require('../../../pics' + this.props.project.image)} />

                    <Card.Body>
                        <Card.Title>{this.props.project.title}</Card.Title>
                        <Card.Text>
                            {this.props.project.technos}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}