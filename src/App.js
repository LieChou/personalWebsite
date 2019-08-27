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
      <div className="d-flex flex-row flex-wrap">
        <div className="col-lg-3 col-md-4">
          <Header />
        </div>

        <div className="col-lg-9 col-md-8 pl-2" >
          <Portfolio
            projects={this.state.projects}
          />
        </div>
      </div>
    )
  }
}
