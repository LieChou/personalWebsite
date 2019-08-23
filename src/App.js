import React, { Component } from 'react';
import { Header } from './components';

export default class App extends Component {

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="lg-4">
          <Header />
        </div>

        <div className="p-2 lg-8">
          <p>Portfolio here to add</p>
        </div>
      </div>
    )
  }
}
