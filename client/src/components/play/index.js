import React, { Component } from 'react'


import './play.css';
import PlayControl from '../playControl';
import PlayDetail from '../playDetail';
import PlayList from '../playList';

class Play extends Component {
  render() {
    return (
      <div className="media-play">
        <div className="container pl-0 pr-0">
          <div className="row align-items-center">
            <PlayControl />
            <PlayDetail />
            <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default Play;
