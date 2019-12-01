import React, { Component, Fragment } from 'react'
import Story from '../../components/story';

import './dashboard.css';
import Recommended from '../../components/recommended';

class StoryDashBoard extends Component {
  render() {
    return (
      <Fragment>
          {/* <div className="mt-3 story-dash-item">
            <Story />
          </div>
          <div className="mt-3 story-dash-item">
            <Story />
          </div>
          <div className="mt-3 story-dash-item">
            <Story />
          </div>
          <div className="mt-3 story-dash-item">
            <Story />
          </div>
          <div className="mt-3 story-dash-item">
            <Story />
          </div>
          <div className="mt-3 story-dash-item">
            <Story />
          </div> */}
          <Recommended />
      </Fragment>
    )
  }
}
export default StoryDashBoard;
