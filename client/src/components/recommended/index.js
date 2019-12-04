import React, { Component } from 'react';

import { IoIosStar } from 'react-icons/io';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./recommended.css";

class Recommended extends Component {
  render() {
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
                <img className="d-block w-100" src="https://truyenaudiocv.com/uploads/manga/linh-vu-thien-ha/cover/cover_250x350.jpg" alt="First slide" />
                <a href="/" className="title">Linh vũ thiên hạ</a>
                <p>Nhóm dịch: Sói Già
                  Đả tự: Bựa Thập Ngũ BLH
                  Lục Thiếu Du, linh hồn bị xuyên qua đến thế giới khác, nhập vào thân thể củ...
                  </p>
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src="https://truyenaudiocv.com/uploads/manga/cuc-pham-tien-de-tai-do-thi/cover/cover_250x350.jpg" alt="Second slide" />
                <a href="/" className="title">Vũ Thần Chúa Tể</a>
                <p>Thiên Vũ Đại Lục một đại truyền kỳ Tần Trần , bởi vì bạn chí cốt phản bội ngoài ý muốn ngã xuống Vũ Vực . Ba tră...
                  </p>
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src="https://truyenaudiocv.com/uploads/manga/vu-than-chua-te/cover/cover_250x350.jpg" alt="Third slide" />
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
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start-1 p-2">
                  <IoIosStar />
                </div>
                <div className="info info-best pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Vũ Thần Chúa Tể</a>
                  <p className="view mb-0">Đề cử : <span>150</span></p>
                  <div className="extra-info">
                    <p className="mb-0">
                      Thể loại: 
                      <a href="https://truyenaudiocv.com/danh-sach/category/tien-hiep" className="pl-1"> Tiên Hiệp</a>,
                      <a href="https://truyenaudiocv.com/danh-sach/category/huyen-ao" > Huyền Ảo</a>,
                      <a href="https://truyenaudiocv.com/danh-sach/category/trong-sinh" > Trọng Sinh</a>
                    </p>
                    <p>Tác giả: Ám Ma sư</p>
                  </div>
                </div>
                <div className="thumb">
                  <div className="book-cover">
                    <a className="book-cover-link" href="https://truyenaudiocv.com/vu-than-chua-te" title="Vũ Thần Chúa Tể">
                      <img src="https://truyenaudiocv.com/uploads/manga/vu-than-chua-te/cover/cover_thumb.jpg" alt="Vũ Thần Chúa Tể" />
                    </a>
                    <span className="book-cover-shadow"></span>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start-2 p-2">
                  <IoIosStar />
                </div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Vũ Luyện Điên Phong</a>
                  <span className="view pt-2 pb-2">120</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start-3 p-2">
                  <IoIosStar />
                </div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Cực Phẩm Tiên Đế Tại Đô Thị</a>
                  <span className="view pt-2 pb-2">100</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">4</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Siêu Thần Yêu Nghiệt</a>
                  <span className="view pt-2 pb-2">80</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">5</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Yêu Long Cổ Đế</a>
                  <span className="view pt-2 pb-2">60</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">6</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Đế tôn</a>
                  <span className="view pt-2 pb-2">40</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">7</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Đế bá</a>
                  <span className="view pt-2 pb-2">35</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">8</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Vô Tận Đan Điền</a>
                  <span className="view pt-2 pb-2">30</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">9</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Vô Thượng Sát Thần</a>
                  <span className="view pt-2 pb-2">25</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="index start p-2">10</div>
                <div className="info pl-5 flex-grow-1 d-flex">
                  <a href="/" className="flex-grow-1 pt-2 pb-2">Toàn Chức Pháp Sư</a>
                  <span className="view pt-2 pb-2">20</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 access">
          <h4 className="mb-3">Truy cập nhiều</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Thần Đạo Đan Tôn</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">6500609</strong>
                  Truy cập
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Siêu Thần Yêu Nghiệt</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">3731585</strong>
                  Truy cập
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Vạn Vực Linh Thần</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">1274953 </strong>
                  Truy cập
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Đế bá</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">4366000 </strong>
                  Truy cập
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Yêu Long Cổ Đế</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">3292791 </strong>
                  Truy cập
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0">
              <div className="item">
                <h4 className="title mb-0">
                  <a href="https://truyenaudiocv.com/than-dao-dan-ton" title="Thần Đạo Đan Tôn">Vô Tận Đan Điền</a>
                </h4>
                <div className="view">
                  <strong className="mr-2">4080244 </strong>
                  Truy cập
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Recommended;
