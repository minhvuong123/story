import React, { Component, Fragment } from 'react'
import Header from './containers/header'
import Main from './containers/main'
import PlayDashBoard from './containers/playDashboard'

import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Main />
          <PlayDashBoard />
        </Router>
      </Fragment>
    )
  }
}

export default App;

