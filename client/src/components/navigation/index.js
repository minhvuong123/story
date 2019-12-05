import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';


import "./navigation.css";

class Header extends Component {

  preventEvent = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="col-sm-12 pl-0 pr-0 order-3 order-sm-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-default pl-0 pr-0">
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </div>
              <div className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/category"
                  onClick={this.preventEvent} 
                 >
                  Thể loại <IoIosArrowForward className="d-inline-block d-sm-none icon" />
                </NavLink>
                <ul className="row nav-category-list">
                    <li className="col-sm-2">
                      <NavLink to="/category/tien-hiep" className="nav-category-item nav-link">Tiên Hiệp</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/kiem-hiep" className="nav-category-item nav-link">Kiếm Hiệp</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/do-thi" className="nav-category-item nav-link">Đô Thị</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/huyen-ao" className="nav-category-item nav-link">Huyền Ảo</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/ngon-tinh" className="nav-category-item nav-link">Ngôn Tình</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/di-nang" className="nav-category-item nav-link">Dị Năng</NavLink>
                    </li>
                    <li className="col-sm-2">
                      <NavLink to="/category/di-gioi" className="nav-category-item nav-link">Dị Giới</NavLink>
                    </li>
                  </ul>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link active" to="/manager">Quản lý</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
