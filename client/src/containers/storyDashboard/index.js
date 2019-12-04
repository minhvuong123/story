import React, { Component, Fragment } from 'react'
// import Story from '../../components/story';

import './dashboard.css';
import Recommended from '../../components/recommended';
import NewUpdate from '../../components/newUpdate';
import NewComplete from '../../components/newComplete';

class StoryDashBoard extends Component {
  render() {
    return (
      <Fragment>
          {/* 
            <div className="mt-3 story-dash-item">
              <Story />
            </div>
          */}
          <Recommended />
          <NewUpdate />
          <NewComplete />
      </Fragment>
    )
  }
}
export default StoryDashBoard;
