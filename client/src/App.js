import React, { Component, Fragment } from 'react'
import Header from './containers/header'
import Main from './containers/main'
import Play from './components/play'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Play />
      </Fragment>
    )
  }
}

export default App;

