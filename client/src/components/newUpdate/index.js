import React, { Component, Fragment } from 'react';

import { NavLink } from 'react-router-dom';

import { apiShare } from '../../constants';

import './update.css';

class NewUpdate extends Component {
  render() {
    const { chapters } = this.props;
    return (
      <div className="row mt-5">
        <div className="col-sm-4">

        </div>
        <div className="col-sm-8 new-update">
          <h4 className="title">Mới cập nhật</h4>
          <ul className="list-group list-group-flush mt-4">
            {
              chapters && chapters.length && chapters.map((chapter, index) => {
                return  <Fragment key={index}>
                          <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                            <div className="content d-flex align-items-center">
                              <NavLink className="thumb" to={`/stories/${chapter.Story.slugName}`} title="Theo Hỗn Độn Thể Bắt Đầu">
                                <img className="img-responsive" src={`${apiShare}/${chapter.Story.imgThumb}`} alt={chapter.Story.name}  />
                              </NavLink>
                              <div className="info">
                                <h2 className="title mb-0 pr-2 pl-2">
                                  <NavLink to={`/stories/${chapter.Story.slugName}`} title="Theo Hỗn Độn Thể Bắt Đầu">{chapter.Story.name}</NavLink>
                                </h2>
                                <div className="name pr-2 pl-2">
                                  {
                                    chapter.name ? chapter.name : chapter.Story.name
                                  }
                                </div>
                                <div className="chap pr-2 pl-2">
                                  <a href="/">
                                    Chương {chapter.chapterNumber}
                                  </a>
                                  &nbsp;
                                </div>
                                {/* <div className="time pr-2 pl-2">
                                  9 phút trước
                                </div> */}
                              </div>
                            </div>
                          </li> 
                        </Fragment>
              })
            }
           
            {/* <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
              <div className="content d-flex align-items-center">
                <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                  <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                </a>
                <div className="info">
                  <h2 className="title mb-0 pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                  </h2>
                  <div className="name pr-2 pl-2">Tiên Nữ Xuyên Liễu Bàn Thứ</div>
                  <div className="chap pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
          */}
          </ul>
        </div>
      </div>
    )
  }
}
export default NewUpdate;
