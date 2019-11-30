import React, { Component, Fragment } from 'react';

import './detail.css';
import StoryDescription from '../storyDes';

class StoryDetail extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mb-5">
          <div className="col-sm-3">
            <div className="story-thumb"></div>
          </div>
          <div className="col-sm-6">
            <div className="story-title">Linh vũ thiên hạ</div>
            <div className="story-item mt-2">
              <span className="story-item-label">Tác giả:</span>
              <span >Vũ Phong</span>
            </div>
            <div className="story-item mt-2">
              <span className="story-item-label">Thể loại:</span>
              <a href="#" >Tiên Hiệp</a>
            </div>
            <div className="story-item mt-2">
              <span className="story-item-label">Tình trạng:</span>
              <span className="story-item-status">Hoàn thành</span>
            </div>
            <div className="story-buttons">
              <a href="#" className="story-btn">Nghe từ đầu</a>
            </div>
          </div>
          <div className="col-sm-3">
            Đánh giá
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <StoryDescription />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default StoryDetail;
