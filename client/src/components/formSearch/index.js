import React, { Component } from 'react';
import { IoIosSearch, IoIosTimer, IoIosEye } from 'react-icons/io';

import './search.css';

class FormSearch extends Component {
  render() {

    return (
      <div className="form-sort d-flex justify-content-center">
        <div className="sort sort-time">
          <IoIosTimer />
          <span>Thời gian cập nhật</span>
          </div>
        <div className="sort sort-view">
          <IoIosEye />
          <span>Lượt xem</span>
        </div>
        <div className="sort sort-search">
          <input type="text" placeholder="Tên truyện..."/>
          <button type="button"><IoIosSearch /></button>
        </div>
      </div>
    )
  }
}

export default FormSearch;
