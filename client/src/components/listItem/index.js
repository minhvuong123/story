import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li>
        <div className="media-play-detail">
          <div className="d-sm-inline-block song-thumb">
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
    )
  }
}
export default ListItem;
