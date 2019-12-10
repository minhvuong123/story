import React, { Component, Fragment } from 'react';

import { apiShare } from '../../constants';

import { NavLink } from 'react-router-dom';

import { IoIosStar } from 'react-icons/io';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recommended.css";

class Recommended extends Component {
  render() {
    const { stories } = this.props;
    return (
      <div className="row">
        <div className="col-sm-4 pt-0 recommend-slide">
          <h4 className="mb-3">Có gì hót ?</h4>
          <div id="carouselExampleIndicators" className="carousel slide pb-5 pr-5 pl-5" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="http://localhost:3001/public/uploads/images/cover_linh_vu_thien_ha.jpg" alt="First slide" />
                <a href="/" className="title">Linh vũ thiên hạ</a>
                <p>Nhóm dịch: Sói Già
                  Đả tự: Bựa Thập Ngũ BLH
                  Lục Thiếu Du, linh hồn bị xuyên qua đến thế giới khác, nhập vào thân thể củ...
                  </p>
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src="http://localhost:3001/public/uploads/images/cover_dai_chua_te.jpg" alt="Second slide" />
                <a href="/" className="title">Vũ Thần Chúa Tể</a>
                <p>Thiên Vũ Đại Lục một đại truyền kỳ Tần Trần , bởi vì bạn chí cốt phản bội ngoài ý muốn ngã xuống Vũ Vực . Ba tră...
                  </p>
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src="http://localhost:3001/public/uploads/images/cover_doc_ton_tam_gioi.jpg" alt="Third slide" />
                <a href="/" className="title">Độc tôn tam giới</a>
                <p>Cửu Kiếp Tiên Đế, đô thị trọng sinh!Một địa cầu, một cái Tiên giới, đây chính là thiên địa cách biệt a!“Kinh Nguyệt Đan, chuyê...
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 recomended">
          <h4>Đề cử tháng</h4>
          <ul className="list-group list-group-flush">
            {
              stories 
              && stories.length 
              && stories.map((story, index) => {
                if(index === 0){
                  return  <Fragment key={index}>
                            <li className="list-group-item mb-0 p-0">
                              <div className="content d-flex">
                                <div className="index start-1 p-2">
                                  <IoIosStar />
                                </div>
                                <div className="info info-best pl-5 flex-grow-1 d-flex">
                                  <NavLink to={`/stories/${story.slugName}`} className="flex-grow-1 pt-2 pb-2">{story.name}</NavLink>
                                  {/* <p className="view mb-0">Đề cử : <span>150</span></p> */}
                                  <div className="extra-info">
                                    <p className="mb-0">
                                      Thể loại: 
                                      <NavLink to={`/stories/${story.slugName}`} className="pl-1">{story.Category.name}</NavLink>
                                    </p>
                                    <p>Tác giả: {story.author}</p>
                                  </div>
                                </div>
                                <div className="thumb">
                                  <div className="book-cover">
                                    <NavLink className="book-cover-link" to={`/stories/${story.slugName}`} title={story.name}>
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
                              <div className="content d-flex">
                                <div className="index start-2 p-2">
                                  <IoIosStar />
                                </div>
                                <div className="info pl-5 flex-grow-1 d-flex">
                                  <NavLink to={`/stories/${story.slugName}`} className="flex-grow-1 pt-2 pb-2">{story.name}</NavLink>
                                  {/* <span className="view pt-2 pb-2">120</span> */}
                                </div>
                              </div>
                            </li>
                          </Fragment>
                }
              })
            }
          </ul>
        </div>
        <div className="col-sm-4 access">
          <h4 className="mb-3">Truy cập nhiều</h4>
          <ul className="list-group list-group-flush">
          {
              stories.map((story, index) => {
                return  <Fragment key={index}>
                          <li className="list-group-item mb-0">
                            <div className="item">
                              <h4 className="title mb-0">
                                <NavLink to={`/stories/${story.slugName}`} title={story.name}>{story.name}</NavLink>
                              </h4>
                              <div className="view">
                                <strong className="mr-2">{story.view}</strong>
                                Truy cập
                              </div>
                            </div>
                          </li>
                        </Fragment>
              })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Recommended;
