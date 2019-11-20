import React, { Component } from 'react'
import "./navigation.css";

class Header extends Component {
  render() {
    return (
      <div className="col-sm-12 pl-0 pr-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-default pl-0 pr-0">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-item">
                <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/">Thể loại</a>
                <ul className="row nav-category-list">
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Tiên Hiệp</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Kiếm Hiệp</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Đô Thị</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Huyền Ảo</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Ngôn Tình</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Dị Năng</a></li>
                    <li className="col-sm-2"><a href="/" className="nav-category-item nav-link">Dị Giới</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
