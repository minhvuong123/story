import React, { Component, Fragment } from 'react'
import Header from './containers/header'
import Main from './containers/main'
import PlayDashBoard from './containers/playDashboard'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <PlayDashBoard />
      </Fragment>
    )
  }
}

export default App;

