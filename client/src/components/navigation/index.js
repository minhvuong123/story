import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from 'react-icons/io';


import "./navigation.css";

class Header extends Component {

  preventEvent = (e) => {
    e.preventDefault();
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="col-sm-12 pl-0 pr-0 order-3 order-sm-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-default pl-0 pr-0">
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav flex-row">
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
                   {
                     categories.map(category => {
                       return  <Fragment key={category.id}>
                                <li className="col-sm-2">
                                  <NavLink to={`/category/${category.slugName}`} className="nav-category-item nav-link">{category.name}</NavLink>
                                </li>
                              </Fragment>
                     })
                   }
                </ul>
              </div>
              {/* <div className="nav-item">
                <NavLink className="nav-link active" to="/manager">Quản lý</NavLink>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
