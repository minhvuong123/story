import React, { Component } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa';

import "./story.css"

class Story extends Component {
  render() {
    return (
      <div className="col-story">
        <div className="col-story-link">
          <a href="/">
            <img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/e/2/8/1e28c2bbd99e433b3bc50c12b8e2f76a.jpg" alt="" />
          </a>
          <div className="story-player">
            <FaRegPlayCircle />
          </div>
          <div className="col-story-info">Name 1</div>
        </div>
      </div>
    )
  }
}

export default Story;
