import React, { Component } from 'react'
import { 
  IoIosSkipBackward, 
  IoIosSkipForward, 
  IoIosShuffle, 
  IoMdRepeat,
} from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

class PlayControl extends Component {
  render() {
    const { play, playAudio } = this.props;
    
    let playBtn =  play ? <FaRegPauseCircle /> : <FaRegPlayCircle />;
    return (
      <div className="col-3 col-sm-3 pl-0 pr-0">
        <div className="media-play-control">
          <div className="control control-backward" title="Previous">
            <IoIosSkipBackward />
          </div>
          <div className="control control-play" onClick={playAudio} title={ `${play ? 'pause' : 'play'}`}>
            {playBtn}
          </div>
          <div className="control control-forward" title="Next">
            <IoIosSkipForward />
          </div>
          <div className="control control-random d-none d-sm-none d-lg-inline-block" title="Nghe ngẫu nhiên">
            <IoIosShuffle />
          </div>
          <div className="control control-repeat d-none d-sm-none d-lg-inline-block" title="Lặp lại">
            <IoMdRepeat />
          </div>
        </div>
      </div>
    )
  }
}

export default PlayControl;
