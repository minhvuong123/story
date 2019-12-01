import React, { Component } from 'react'
import StoryDashBoard from '../storyDashboard';
import StoryDetail from '../../components/storyDetail';
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container pb-5 mb-5">
          <StoryDashBoard/>
          {/* <StoryDetail /> */}
        </div>
      </div>
    )
  }
}

export default Main;
