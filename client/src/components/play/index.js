import React, { Component } from 'react'
import { IoIosSkipBackward, IoIosSkipForward, IoIosShuffle, IoMdRepeat } from "react-icons/io";
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import { MdQueueMusic } from "react-icons/md";
import './play.css';

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStatus: false,
    }
  }

  changeListStatus = () => {
    const { listStatus } = this.state;
    this.setState({
      listStatus: !listStatus
    })
  }
  
  render() {
    const { listStatus } = this.state;
    console.log(listStatus);
    
    return (
      <div className="media-play">
        <div className="container pl-0 pr-0">
          <div className="row align-items-center">
            <div className="col-3 col-sm-3 pl-0 pr-0">
              <div className="media-play-control">
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
            <div className="col-7 col-sm-6 pl-0 pr-0">
              <div className="media-play-detail">
                <div className="d-none d-sm-inline-block song-thumb">
                  <a href="/">
                    <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                  </a>
                </div>
                <div className="song-wrap">
                  <div className="song-info">
                    <div className="d-none d-sm-inline-block song-info-name">Name</div>
                    <div className="d-none d-sm-inline-block song-info-time">
                      <span className="time-play">00:04</span>
                      <span> / </span>
                      <span className="time-duration">02:27</span>
                    </div>
                  </div>
                  <div className="song-player-time">
                    <div className="player-time-fill" />
                    <div className="player-time-buffer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 col-sm-3 pr-0">
              <div className="media-play-list-wrap">
                <div className="media-play-list" onClick={this.changeListStatus}>
                  <MdQueueMusic />
                  <span className="d-none d-sm-inline-block">Danh sách phát</span>
                  <span className="play-list-amount">(27)</span>
                </div>
                <div className={`media-play-list-pop ${listStatus ? 'active' : ''}`}>
                  <ul className="play-list-item">
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media-play-detail">
                        <div className="d-none d-sm-inline-block song-thumb">
                          <a href="/">
                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="song-wrap">
                          <div className="song-info">
                            <div className="song-info-name">Name</div>
                            <div className="song-info-auth">Tác giả</div>
                          </div>
                        </div>
                        <div className="song-time">
                            02:27
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Play;
