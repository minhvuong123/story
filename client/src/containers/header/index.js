import React, { Component } from 'react'
import Navigation from '../../components/navigation';

import { IoIosSearch, IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { FaUser } from 'react-icons/fa'
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusOpen: false,
    }
  }
  
  changeOpenStatus = () => {
    const { statusOpen } = this.state;
    this.setState({
      statusOpen: !statusOpen
    })
  }

  render() {
    const { statusOpen } = this.state;
    return (
      <div className={`header ${statusOpen ? 'active' : ''}`}>
        <div className="header-open" onClick={this.changeOpenStatus}>
          {
            statusOpen ? <IoMdClose /> : <IoIosArrowForward />
          }
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-2 d-none d-sm-inline-block">
              Logo
            </div>
            <div className="col-12 col-sm-6 order-2 order-sm-0 d-none d-sm-inline-block">
              <div className="header-search">
                <div className="header-search-btn">
                  <IoIosSearch />
                </div>
                <input type="text" className="header-search-input" placeholder="Nhập tên truyện hoặc tên tác giả..." />
              </div>
            </div>
            <div className="col-12 col-sm-4 pl-0 pr-0 order-1 order-sm-0">
              <div className="user-profile pb-0 pt-3 pb-3 pt-sm-0 pb-sm-0">
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
