import React, { Component, Fragment } from 'react'
import Story from '../story';

class StoryDashBoard extends Component {
  render() {
    const { width } = this.props;
    return (
      <div className="row p-3 mb-5 pb-5">
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
          <div className="mt-3" style={{width: width}}>
            <Story />
          </div>
      </div>
    )
  }
}
export default StoryDashBoard;
