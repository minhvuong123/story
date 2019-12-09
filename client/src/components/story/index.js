import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { apiShare } from '../../constants';

import { FaRegPlayCircle } from 'react-icons/fa';

import "./story.css"

class Story extends Component {
  render() {
    const { story } = this.props;
    return (
      <div className="col-story">
        <div className="col-story-link">
          <NavLink to={`/stories/${story.slugName}`} title={story.name}>
            <img src={`${apiShare}/${story.imgUrl}`} alt={story.name} />
        
            <div className="story-player">
              <FaRegPlayCircle />
            </div>
            </NavLink>
            <div className="col-story-info" title={story.name}>{story.name}</div>
        </div>
      </div>
    )
  }
}

export default Story;
