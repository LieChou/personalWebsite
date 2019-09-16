import React, { Component } from 'react';
import Presentation from './presentation';

export default class Header extends Component {

    render() {
        return (
            <div style={{ backgroundColor: "white", color: "#282c34" }}>
                <div>
                    <Presentation />
                </div>
            </div>
        )
    }
}