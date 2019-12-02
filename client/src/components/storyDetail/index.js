import React, { Component, Fragment } from 'react';
import Pagination from 'react-paginate';
import { IoMdHeartEmpty, IoIosMore, IoIosPlay } from 'react-icons/io'

import './detail.css';
import StoryDescription from '../storyDes';

class StoryDetail extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mb-5 story-detail">
          <div className="col-sm-4">
            <div className="story-thumb">
              <div className="thumb-play-opacity"><IoIosPlay /></div>
            </div>
            <h4 className="mt-3 text-center">Theo Hỗn Độn Thể Bắt Đầu</h4>
            <div className="text-center mt-3">
              <a class="z-btn"><span style={{fontSize: '20px'}}><IoIosPlay /></span> Tiếp tục phát</a>
            </div>
            <div className="text-center mt-3" style={{fontSize: '13px', color: '#999'}}>14 audio truyện - 1 giờ 6 phút</div>
          </div>
          <div className="col-sm-8">
            <ul className="list-group">
              <li className="list-group-item active mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">1</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">2</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">3</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">4</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">5</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">6</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">7</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">8</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">9</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                <div className="content d-flex align-items-center">
                  <div className="index p-2">10</div>
                  <a className="thumb" href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">
                    <img className="img-responsive" src="https://truyenaudiocv.com/uploads/manga/huyen-huyen-theo-hon-don-the-bat-dau/cover/cover_thumb.jpg" alt="Theo Hỗn Độn Thể Bắt Đầu" itemprop="image" />
                    <div className="thumb-play-opacity"><IoIosPlay /></div>
                  </a>
                  <div className="info flex-column">
                    <h2 className="name mb-0 pr-2 pl-2">
                      <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" title="Theo Hỗn Độn Thể Bắt Đầu">Theo Hỗn Độn Thể Bắt Đầu</a>
                    </h2>
                    <div className="author pr-2 pl-2">Thanh Hưng</div>
                  </div>
                  <div className="z-duration pr-2 pl-2">04:30</div>
                  <div className="extension">
                    <ul>
                      <li><IoMdHeartEmpty /></li>
                      <li className="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <IoIosMore />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Thêm vào danh sách phát</a>
                          <a className="dropdown-item" href="#">Tải xuống</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <Pagination
              previousLabel={<span className="lnr lnr-chevron-left"></span>}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              nextLabel={<span class="lnr lnr-chevron-right"></span>}
              breakLabel={'...'}
              breakClassName={'break-me disabled'}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination mt-4 justify-content-center'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default StoryDetail;
