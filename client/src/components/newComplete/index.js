import React, { Component } from 'react';
import Story from '../story';
import { IoIosStar } from 'react-icons/io';

import './complete.css';

class NewComplete extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-4 new-complete">
          <h4>Mới hoàn thành</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-0 p-0">
              <div className="content d-flex">
                <div className="info info-best flex-grow-1 d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Vũ Thần Chúa Tể</a>
                  <p className="view mb-0">Truy cập : <span>6500609</span></p>
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
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Vũ Luyện Điên Phong</a>
                  <span className="view pt-2 pb-2">3731585 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Cực Phẩm Tiên Đế Tại Đô Thị</a>
                  <span className="view pt-2 pb-2">1274953 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Siêu Thần Yêu Nghiệt</a>
                  <span className="view pt-2 pb-2">4366000 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Yêu Long Cổ Đế</a>
                  <span className="view pt-2 pb-2">3292791 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Đế tôn</a>
                  <span className="view pt-2 pb-2">4080244 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Đế bá</a>
                  <span className="view pt-2 pb-2">4080244 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Vô Tận Đan Điền</a>
                  <span className="view pt-2 pb-2">4080244 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Vô Thượng Sát Thần</a>
                  <span className="view pt-2 pb-2">4080244 Truy cập</span>
                </div>
              </div>
            </li>
            <li className="list-group-item mb-0 p-0">
              <div className="content">
                <div className="info d-flex">
                  <a href="#" className="flex-grow-1 pt-2 pb-2">Toàn Chức Pháp Sư</a>
                  <span className="view pt-2 pb-2">4080244 Truy cập</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-8 access">
          <h4 className="mb-3">Truyện dạng ảnh</h4>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mt-3">
              <Story />
            </div>
            <div className="col-sm-6 col-lg-4 mt-3">
              <Story />
            </div>
            <div className="col-sm-6 col-lg-4 mt-3">
              <Story />
            </div>
            <div className="col-sm-6 col-lg-4 mt-3">
              <Story />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewComplete;
