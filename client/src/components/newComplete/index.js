import React, { Component, Fragment } from 'react';
import Story from '../story';
import { NavLink } from 'react-router-dom';
import { apiShare } from '../../constants';

// import { IoIosStar } from 'react-icons/io';

import './complete.css';

class NewComplete extends Component {
  render() {
    const { stories } = this.props;
    return (
      <div className="row mt-5">
        <div className="col-sm-4 new-complete">
          <h4>Mới hoàn thành</h4>
          <ul className="list-group list-group-flush">
            {
              stories.map((story, index) => {
                if(index === 0){
                  return  <Fragment key={index}>
                            <li className="list-group-item mb-0 p-0">
                              <div className="content d-flex">
                                <div className="info info-best flex-grow-1 d-flex">
                                  <NavLink to={`/stories/${story.slugName}`} className="flex-grow-1 pt-2 pb-2">{story.name}</NavLink>
                                  <p className="view mb-0">Truy cập : <span>{story.view}</span></p>
                                  <div className="extra-info">
                                    <p className="mb-0">
                                      Thể loại:
                                      <a href="https://truyenaudiocv.com/danh-sach/category/tien-hiep" className="pl-1">{story.Category.name}</a>
                                    </p>
                                    <p>Tác giả: {story.author}</p>
                                  </div>
                                </div>
                                <div className="thumb">
                                  <div className="book-cover">
                                    <NavLink className="book-cover-link" to={`/stories/${story.slugName}`} title="Vũ Thần Chúa Tể">
                                      <img src={`${apiShare}/${story.imgUrl}`} alt={story.name} />
                                    </NavLink>
                                    <span className="book-cover-shadow"></span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </Fragment> 
                } else {
                  return  <Fragment key={index}>
                            <li className="list-group-item mb-0 p-0">
                              <div className="content">
                                <div className="info d-flex">
                                  <NavLink to={`/stories/${story.slugName}`} className="flex-grow-1 pt-2 pb-2">{story.name}</NavLink>
                                  <span className="view pt-2 pb-2">{story.view} Truy cập</span>
                                </div>
                              </div>
                            </li>
                          </Fragment>
                }
              })
            }
          </ul>
        </div>
        <div className="col-sm-8 access">
          <h4 className="mb-0">Truyện dạng ảnh</h4>
          <div className="row">
            {
              stories.map((story, index) => {
                return  <Fragment key={index}>
                          <div className="col-6 col-sm-6 col-lg-4 mt-3">
                            <Story story={story}/>
                          </div>
                        </Fragment>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default NewComplete;
