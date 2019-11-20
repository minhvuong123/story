import React, { Component } from 'react'
import { IoIosSkipBackward, IoIosSkipForward, IoIosShuffle, IoMdRepeat } from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';

class PlayControl extends Component {
  constructor(props) {
    super(props);
    this.refAudio =  React.createRef();
  }

  componentDidMount(){
    const { durationAudio, currentTimeAudio } = this.props;
    this.refAudio.current.onloadedmetadata = () => {
      const value = this.refAudio.current.duration;
      durationAudio(value);
    };

    this.refAudio.current.addEventListener('timeupdate', (event) => {
      const currentTime = this.refAudio.current.currentTime;
      currentTimeAudio(currentTime);
    });
  }

  // componentWillUnmount

  playAudio = () => {
    const { play, currentTime, changePlay } = this.props;
    const Play = !play; // handle in this component
    if(Play){
      this.refAudio.current.play();
      console.log("currentTime true: ",this.refAudio.current.currentTime);    
    } else {
      this.refAudio.current.pause();
      console.log("currentTime false: ", this.refAudio.current.currentTime);
    }
    changePlay();
  }
  
  render() {
    const { play } = this.props;
    const playBtn = play ? <FaRegPauseCircle /> : <FaRegPlayCircle />;
    return (
      <div className="col-3 col-sm-3 pl-0 pr-0">
        <div className="media-play-control">
          <audio id="player" ref={this.refAudio} src="https://ia803002.us.archive.org/21/items/DauLaDaiLuc2TH/40_Ch%C6%B0%C6%A1ng%201141-1160%20Dau%20La%20Dai%20Luc%202.mp3" type="audio/mp3">
            {/* <source  /> */}
            {/* src="https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/33b357257c62953ccc73/2725426232164651929?authen=exp=1574420232~acl=/33b357257c62953ccc73/*~hmac=b0f0e912dfe2f0808295ce501a991c5a" type="audio/mp3" */}
            
          </audio>
          <div className="control control-backward" title="Previous">
            <IoIosSkipBackward />
          </div>
          <div className="control control-play" onClick={this.playAudio} title={ `${play ? 'pause' : 'play'}`}>
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
