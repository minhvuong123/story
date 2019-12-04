import React, { Component } from 'react';
import { IoIosSearch, IoIosTimer, IoIosEye } from 'react-icons/io';

import './search.css';

class FormSearch extends Component {
  render() {

    return (
      <div className="form-sort d-flex justify-content-center">
        <div className="sort sort-time">
          <IoIosTimer />
          <span className="ml-2">Thời gian cập nhật</span>
          </div>
        <div className="sort sort-view mt-3 mt-sm-3 mt-lg-0">
          <IoIosEye />
          <span className="ml-2">Lượt xem</span>
        </div>
        <div className="sort sort-search mt-3 mt-sm-3 mt-lg-0">
          <input type="text" placeholder="Tên truyện..."/>
          <button type="button"><IoIosSearch /></button>
        </div>
      </div>
    )
  }
}

export default FormSearch;
