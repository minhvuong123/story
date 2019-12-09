import React, { Component } from 'react'
import Navigation from '../../components/navigation';
import {
  NavLink
} from 'react-router-dom';

import axios from 'axios';

import { api } from '../../constants';

import { connect } from 'react-redux';

import { getCategories } from '../../redux/actions';

import { IoIosSearch, IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import "./header.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusOpen: false,
    }
  }

  componentDidMount(){
    const { getCategories } = this.props;

    axios.get( `${api}/category`)
    .then(res => {
     const categories = res.data.categories;
     getCategories(categories);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  changeOpenStatus = () => {
    const { statusOpen } = this.state;
    this.setState({
      statusOpen: !statusOpen
    })
  }

  render() {
    const { statusOpen } = this.state;
    const { categories } = this.props;
    return (
      categories 
      && categories.length 
      && <div className={`header ${statusOpen ? 'active' : ''}`}>
            <div className="header-open" onClick={this.changeOpenStatus}>
              {
                statusOpen ? <IoMdClose /> : <IoIosArrowForward />
              }
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-sm-2 d-none d-sm-inline-block">
                  
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
                    <div className="dropdown">
                      <a className="dropdown-toggle user-profile-icon" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaUser />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <NavLink className="dropdown-item d-flex align-items-center" to="/minhvuong"><FaUser className="mr-2" /> Profile</NavLink>
                        <a className="dropdown-item" href="/"><FaSignOutAlt className="mr-1" /> Sign out</a>
                      </div>
                    </div>
                    <NavLink to="/login" className="user-info">Đăng nhập</NavLink>
                  </div>
                </div>
                <Navigation categories={categories} />
              </div>
            </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.storyReducer.categories,
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: categories => dispatch(getCategories(categories))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
