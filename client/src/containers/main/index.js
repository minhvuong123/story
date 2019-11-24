import React, { Component } from 'react'
import StorySlide from '../../components/storySlide';
import StoryDashBoard from '../../components/storyDashboard';
import StoryDetail from '../../components/storyDetail';
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          {/* <StorySlide />
          <StoryDashBoard width="20%"/> */}
          <StoryDetail />
        </div>
      </div>
    )
  }
}

export default Main;
