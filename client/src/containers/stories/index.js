import React, { Component, Fragment } from 'react';
import Breadcrumb from '../../components/breadcrumb';
import FormSearch from '../../components/formSearch';
import Pagination from 'react-paginate';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { api, apiShare } from '../../constants';

import {  
  getStoryCategories,
} from '../../redux/actions';

import axios from 'axios';

import { IoIosList, IoMdGrid } from 'react-icons/io'

import './stories.css';

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPaginate: 0,
    }
  }
  
  componentDidMount(){
    const { catName } = this.props.match.params;
    axios.post(
      `${api}/story/category`, 
      {
        page: 1,
        limit: 10,
        slugName: catName,
      }
    )
    .then(res => {
      const { getStoryCategories } = this.props;
      const stories = res.data.stories;
      const totalPaginate = res.data.totalPaginate;
      getStoryCategories(stories);
      this.setState({
        totalPaginate
      })
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.catName !== this.props.match.params.catName) {
      axios.post(
        `${api}/story/category`, 
        {
          page: 1,
          limit: 10,
          slugName: nextProps.match.params.catName,
        }
      )
      .then(res => {
        const { getStoryCategories } = this.props;
        const stories = res.data.stories;
        const totalPaginate = res.data.totalPaginate;
        getStoryCategories(stories);
        this.setState({
          totalPaginate
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  render() {
    const { totalPaginate } = this.state;
    const { categories, storyCategories } = this.props;
    const { catName } = this.props.match.params;
    // console.log('categories: ', storyCategories);
    
    return (
      <div className="row">
        <div className="col-sm-8 stories">
          <Breadcrumb />
          <div className="pt-4 pb-4 pl-4 pr-4 pt-sm-4 pb-sm-4 pl-sm-4 pr-sm-4  border-bottom" style={{background: 'rgb(242, 242, 242)'}}>
            <FormSearch catName={catName} />
            <div className="d-none d-lg-flex justify-content-center mt-3">
              <span className="view-type"><IoIosList /></span>
              <span className="view-type ml-3"><IoMdGrid /></span>
            </div>
          </div>
          <ul className="list-group list-group-flush mt-4">
            {
              storyCategories 
              && storyCategories.length
              ? storyCategories.map((story) => {
                    return  <Fragment key={story.id}>
                              <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                                <div className="content d-flex align-items-center">
                                  <NavLink className="thumb" to={`/stories/${story.slugName}`} title="Theo Hỗn Độn Thể Bắt Đầu">
                                    <img className="img-responsive" src={`${apiShare}/${story.imgThumb}`} alt="Theo Hỗn Độn Thể Bắt Đầu"  />
                                  </NavLink>
                                  <div className="info">
                                    <h2 className="title mb-0 pr-2 pl-2">
                                      <NavLink to={`/stories/${story.slugName}`} title="Theo Hỗn Độn Thể Bắt Đầu">
                                        {
                                          story.name
                                        }
                                      </NavLink>
                                    </h2>
                                    <div className="author pr-2 pl-2">{story.author}</div>
                                    <div className="chap pr-2 pl-2">
                                      <NavLink to={`/stories/${story.slugName}`}>{story.totalChapter} chương</NavLink>
                                      &nbsp;
                                    </div>
                                    {/* <div className="time pr-2 pl-2">
                                      9 phút trước
                                    </div> */}
                                  </div>
                                </div>
                              </li>
                            </Fragment>
              }): ""
            } 
          </ul>
          {
            totalPaginate 
            ?  <Pagination
                previousLabel={<span className="lnr lnr-chevron-left"></span>}
                previousClassName={'page-item mt-2'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item mt-2'}
                nextLinkClassName={'page-link'}
                nextLabel={<span className="lnr lnr-chevron-right"></span>}
                breakLabel={'...'}
                breakClassName={'break-me mt-2 disabled'}
                pageCount={totalPaginate}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination mt-4 justify-content-center flex-wrap'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                pageClassName={'page-item mt-2'}
                pageLinkClassName={'page-link'}
              /> : "Not found Story"
          }  
        </div>
        <div className="col-sm-4 mt-4 pt-2">
          <div className="stories-filter">
            <div className="block">
                <h4 className="block-title">Danh mục</h4>
                <div className="block-content d-flex flex-wrap justify-content-between">
                  {
                    categories 
                    && categories.length
                    && categories.map(category => {
                      if(category.slugName === catName){
                        return  <Fragment key={category.id}>
                                  <NavLink to={`/category/${category.slugName}`}><span className="active">{category.name}</span></NavLink>
                                </Fragment>
                      } else {
                        return  <Fragment key={category.id}>
                                  <NavLink to={`/category/${category.slugName}`}><span>{category.name}</span></NavLink>
                                </Fragment>
                      }
                      
                    })
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.storyReducer.categories,
  storyCategories: state.storyReducer.storyCategories,
})

const mapDispatchToProps = dispatch => ({
  getStoryCategories: stories => dispatch(getStoryCategories(stories)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories)

