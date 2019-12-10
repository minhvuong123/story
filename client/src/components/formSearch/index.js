import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import axios from 'axios';

import { api } from '../../constants';

import {
  getStoryCategories
} from '../../redux/actions';

import { IoIosSearch, IoIosTimer, IoIosEye } from 'react-icons/io';

import './search.css';

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
    }
  }

  handleChange = (e) => {
    const { catName } = this.props;
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        axios.post(
          `${api}/story/search`, 
          {
            page: 1,
            limit: 10,
            slugName: catName,
            values: this.state.values,
          }
        )
        .then(res => {
          const { getStoryCategories } = this.props;
          const stories = res.data.stories;
          getStoryCategories(stories);
        })
        .catch(err => {
          console.log(err);
        })
      })
  }

  handleSearch = () => {
    const { values }  = this.state;
    const { catName } = this.props;
    
    axios.post(
      `${api}/story/search`, 
      {
        page: 1,
        limit: 10,
        slugName: catName,
        values,
      }
    )
    .then(res => {
      const { getStoryCategories } = this.props;
      
      const stories = res.data.stories;
      getStoryCategories(stories);
      this.setState({
        values: ''
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  render() {
    const { values } = this.state;
    const { storyCategories } = this.props;
    return (
      <div className="form-sort d-flex justify-content-center">
        {/* <div className="sort sort-time">
          <IoIosTimer />
          <span className="ml-2">Thời gian cập nhật</span>
        </div> */}
        {/* <div className="sort sort-view mt-3 mt-sm-3 mt-lg-0">
          <IoIosEye />
          <span className="ml-2">Lượt xem</span>
        </div> */}
        <div className="sort sort-search mt-3 mt-sm-3 mt-lg-0">
          <input type="text" onChange={this.handleChange} name="values" value={this.state.values} placeholder="Tên truyện..."/>
          <button type="button" onClick={this.handleSearch}><IoIosSearch /></button>
          {
            storyCategories 
            && storyCategories.length
            && values
            ?  <div className="sort-option">
                {
                  storyCategories.map(story => {
                    return  <Fragment key={story.id}>
                              <NavLink to={`/stories/${story.slugName}`}>{story.name}</NavLink>
                            </Fragment> 
                  }) 
                }
              </div> : ""
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storyCategories: state.storyReducer.storyCategories,
})

const mapDispatchToProps = dispatch => ({
  getStoryCategories: stories => dispatch(getStoryCategories(stories)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSearch)
