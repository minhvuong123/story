import React, { Component } from 'react'
import StorySlide from '../../components/storySlide';

import "./main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <StorySlide />
        </div>
      </div>
    )
  }
}

export default Main;
