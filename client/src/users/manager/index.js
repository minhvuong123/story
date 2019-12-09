import React, { Component, Fragment } from 'react';
import Pagination from 'react-paginate';

import axios from 'axios';

import { api } from '../../constants';

import { IoIosClose, IoIosMore } from "react-icons/io";

import './manager.css';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      formAddStatus: false,
      name: '',
      slugName: '',
      author: '',
      categoryID: 1,
      imgUrl: '',
      imgThumb: '',
      totalChapter: '',
      status: 0,
    }
  }

  // componentDidMount(){
  //   axios.get( `${api}/category`)
  //   .then(res => {
  //     console.log(res); 
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChangeFile = (event) => {
    const target = event.target;
    const value = event.target.files[0];
    
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmitFormAdd = (event) => {
    event.preventDefault();
    const { name, slugName, author, categoryID, imgUrl, imgThumb, totalChapter, status } = this.state;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('slugName', slugName);
    formData.append('author', author);
    formData.append('categoryID', categoryID);
    formData.append('totalChapter', totalChapter);
    formData.append('status', status);
    formData.append('imgUrl', imgUrl);
    formData.append('imgThumb', imgThumb);
    
    axios.post(
      `${api}/story/add`, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      }
    )
    .then(res => {
      console.log(res); 
    })
    .catch(err => {
      console.log(err);
    })
  }

  toggleFormAdd = () => {
    const { formAddStatus } = this.state;
    this.setState({
      formAddStatus: !formAddStatus
    })
  }
  
  render() {
    const {  formAddStatus,  categoryID, status } = this.state;

    return (
      <Fragment>
        <div className="row border-bottom pb-4">
          <div className="col">
            <h5 className="text-center pb-3">
              Stories
              <button className="btn btn-add" onClick={this.toggleFormAdd}>Thêm</button>
            </h5>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Category</th>
                  <th scope="col">Chapters</th>
                  <th colSpan="2" scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>name</td>
                  <td>Author</td>
                  <td>Category</td>
                  <td>15</td>
                  <td>Status</td>
                  <td className="text-right">
                    <button type="button" className="btn btn-detail mr-3"><IoIosMore /></button>
                    <button type="button" className="btn btn-close"><IoIosClose /></button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination
              previousLabel={<span className="lnr lnr-chevron-left"></span>}
              previousClassName={'page-item mt-2'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item mt-2'}
              nextLinkClassName={'page-link'}
              nextLabel={<span className="lnr lnr-chevron-right"></span>}
              breakLabel={'...'}
              breakClassName={'break-me mt-2 disabled'}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination mt-4 justify-content-center flex-wrap'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName={'page-item mt-2'}
              pageLinkClassName={'page-link'}
            />
          </div>
          <form onSubmit={this.handleSubmitFormAdd} className={`col-sm-4 story-form ${formAddStatus ? "active": ""}`}>
            <h5 className="text-center">Thêm truyện</h5>
            <div className="wrap-input100 validate-input mt-3" >
              <input onChange={this.handleChange} className="input100" type="text" name="name" placeholder="Tên truyện" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input mt-3" >
              <input onChange={this.handleChange} className="input100" type="text" name="slugName" placeholder="Tên truyện" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input mt-3 " >
              <input onChange={this.handleChange} className="input100" type="text" name="author" placeholder="Tác giả" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input mt-3 " >
              <input onChange={this.handleChange} className="input100" type="text" name="totalChapter" placeholder="Số chương" />
              <span className="focus-input100" />
            </div>
            <select onChange={this.handleChange} value={categoryID} className="custom-select mt-3" name="categoryID">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select onChange={this.handleChange} value={status} className="custom-select mt-3" name="status">
              <option value="0">Đang ra</option>
              <option value="1">Hoàn thành</option>
            </select>
            <div className="file mt-3 d-flex align-items-center " >
              <span style={{ whiteSpace: "nowrap" }}>Image: </span>
              <input onChange={this.handleChangeFile} className="input100" type="file" name="imgUrl" style={{ height: "auto" }} />
            </div>
            <div className="file mt-3 d-flex align-items-center" >
              <span style={{ whiteSpace: "nowrap" }}>Thumb: </span>
              <input onChange={this.handleChangeFile} className="input100" type="file" name="imgThumb" style={{ height: "auto" }} />
            </div>
            <div className="container-login100-form-btn m-t-17">
              <button 
                type="submit"
                className="login100-form-btn" 
                style={{ backgroundColor: "#815fdd" }}>Save</button>
            </div>
          </form>
        </div>
        {/* <div className="row border-bottom mt-5 pb-4">
          <div className="col-sm-8">
            <h5 className="text-center">Chapter</h5>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">truyện</th>
                  <th scope="col">chương hiện tại</th>
                  <th scope="col">audio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <Pagination
              previousLabel={<span className="lnr lnr-chevron-left"></span>}
              previousClassName={'page-item mt-2'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item mt-2'}
              nextLinkClassName={'page-link'}
              nextLabel={<span className="lnr lnr-chevron-right"></span>}
              breakLabel={'...'}
              breakClassName={'break-me mt-2 disabled'}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination mt-4 justify-content-center flex-wrap'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName={'page-item mt-2'}
              pageLinkClassName={'page-link'}
            />
          </div>
          <div className="col-sm-4 mt-3">
            <div className="row">
              <div className="col-sm-12">
                <div className="wrap-input100 validate-input mt-3" >
                  <input className="input100" type="text" name="firstname" placeholder="Tên chương" />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="wrap-input100 validate-input mt-3" >
                  <input className="input100" type="text" name="firstname" placeholder="Chương hiện tại (number)" />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="col-sm-12">
                <select class="custom-select mt-3 ">
                  <option selected>Tên truyện</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-sm-12">
                <div className="file mt-3 d-flex align-items-center " >
                  <span style={{ whiteSpace: "nowrap" }}>Audio: </span>
                  <input className="input100" type="file" name="audio" style={{ height: "auto" }} />
                </div>
              </div>
                <div class="container-login100-form-btn m-t-17">
                  <button class="login100-form-btn" style={{ backgroundColor: "#815fdd" }}>Save</button>
                </div>
            </div>
          </div>
        </div> */}
      </Fragment>
    )
  }
}

export default Manager;
