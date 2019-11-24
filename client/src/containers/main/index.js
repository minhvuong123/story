import React, { Component } from 'react'
import StorySlide from '../../components/storySlide';

import "./main.css";
import StoryDashBoard from '../../components/storyDashboard';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <StorySlide />
          <StoryDashBoard width="20%"/>
        </div>
      </div>
    )
  }
}

export default Main;
