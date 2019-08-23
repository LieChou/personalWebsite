import React, { Component } from 'react';
import { Header, Portfolio } from './components';
import projects from './components/util/projects.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    }
  }

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="lg-4">
          <Header />
        </div>

        <div className="p-2 lg-8">
          <Portfolio
            projects={this.state.projects}
          />
        </div>
      </div>
    )
  }
}
