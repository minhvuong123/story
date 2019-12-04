import React, { Component } from 'react';
import Breadcrumb from '../breadcrumb';
import FormSearch from '../formSearch';
import Pagination from 'react-paginate';

import { IoIosList, IoMdGrid } from 'react-icons/io'

import './stories.css';

class Stories extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8 stories">
          <Breadcrumb />
          <div className="pt-4 pb-4 pl-4 pr-4 pt-sm-4 pb-sm-4 pl-sm-4 pr-sm-4  border-bottom" style={{background: 'rgb(242, 242, 242)'}}>
            <FormSearch />
            <div className="d-none d-lg-flex justify-content-center mt-3">
              <span className="view-type"><IoIosList /></span>
              <span className="view-type ml-3"><IoMdGrid /></span>
            </div>
          </div>
          <ul className="list-group list-group-flush mt-4">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
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
                  <div className="author pr-2 pl-2">
                    <a href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau/listen?i=184">Chương 0185 Thái Thượng Đạo Tổ</a>
                    &nbsp;
                  </div>
                  <div className="time pr-2 pl-2">
                    9 phút trước
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <Pagination
              previousLabel={<span className="lnr lnr-chevron-left"></span>}
              previousClassName={'page-item mt-2'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item mt-2'}
              nextLinkClassName={'page-link'}
              nextLabel={<span className="lnr lnr-chevron-right"></span>}
              breakLabel={'...'}
              breakClassName={'break-me mt-2 disabled'}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination mt-4 justify-content-center flex-wrap'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName={'page-item mt-2'}
              pageLinkClassName={'page-link'}
            />
        </div>
        <div className="col-sm-4 mt-4 pt-2">
          <div className="stories-filter">
            <div className="block">
                <h4 className="block-title">Danh mục</h4>
                <div className="block-content d-flex flex-wrap justify-content-between">
                  <span className="active">Tiên hiệp</span>
                  <span>Kiếm hiệp</span>
                  <span>Đô thị</span>
                  <span>Huyển ảo</span>
                  <span>Ngôn tình</span>
                  <span>Dị năng</span>
                  <span>Võng du</span>
                  <span>Dị giới</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stories;
