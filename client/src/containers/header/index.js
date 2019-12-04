import React, { Component } from 'react'
import Navigation from '../../components/navigation';

import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa'
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-sm-2">
              Logo
            </div>
            <div className="col-6 col-sm-6">
              <div className="header-search">
                <div className="header-search-btn">
                  <IoIosSearch />
                </div>
                <input type="text" className="header-search-input" placeholder="Nhập tên truyện hoặc tên tác giả..." />
              </div>
            </div>
            <div className="col col-sm-4">
              <div className="user-profile">
                <a href="/" className="user-profile-icon">
                  <FaUser />
                </a>
                <a href="/" className="user-info">Đăng nhập</a>
              </div>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
