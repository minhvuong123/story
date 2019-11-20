import React, { Component } from 'react'
import { IoIosSkipBackward, IoIosSkipForward, IoIosShuffle, IoMdRepeat } from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

class PlayControl extends Component {
  render() {
    return (
      <div className="col-3 col-sm-3 pl-0 pr-0">
        <div className="media-play-control">
          <audio id="player">
            <source src="https://ia803002.us.archive.org/21/items/DauLaDaiLuc2TH/38_Ch%C6%B0%C6%A1ng%201101-1120%20Dau%20La%20Dai%20Luc%202.mp3" type="audio/mp3" />
          </audio>
          <div className="control control-backward">
            <IoIosSkipBackward />
          </div>
          <div className="control control-play">
            <FaRegPlayCircle />
          </div>
          <div className="control control-forward">
            <IoIosSkipForward />
          </div>
          <div className="control control-random d-none d-sm-none d-lg-inline-block">
            <IoIosShuffle />
          </div>
          <div className="control control-repeat d-none d-sm-none d-lg-inline-block">
            <IoMdRepeat />
          </div>
        </div>
      </div>
    )
  }
}

export default PlayControl;
