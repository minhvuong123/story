import React, { Component, Fragment } from 'react';
import Pagination from 'react-paginate';

import './manager.css';

class Manager extends Component {
  render() {
    return (
      <Fragment>
        <div className="row border-bottom pb-4">
          <div className="col-sm-12">
            <h5 className="text-center">Stories</h5>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">author</th>
                  <th scope="col">category</th>
                  <th scope="col">Image</th>
                  <th scope="col">Thumb</th>
                  <th scope="col">Total chapter</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
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
          <div className="col-sm-12">
            <h5 className="text-center">Thêm truyện</h5>
            <div className="row">
              <div className="col-sm-3">
                <div className="wrap-input100 validate-input mt-3" >
                  <input className="input100" type="text" name="firstname" placeholder="Tên truyện" />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="wrap-input100 validate-input mt-3 " >
                  <input className="input100" type="text" name="firstname" placeholder="Tác giả" />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="wrap-input100 validate-input mt-3 " >
                  <input className="input100" type="text" name="firstname" placeholder="Số chương" />
                  <span className="focus-input100" />
                </div>
              </div>
              <div className="col-sm-3">
                <select class="custom-select mt-3 ">
                  <option selected>Loại truyện</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-sm-4">
                <select class="custom-select mt-3 " >
                  <option selected>Trạng thái</option>
                  <option value="0">Đang ra</option>
                  <option value="1">Hoàn thành</option>
                </select>
              </div>
              <div className="col-sm-4">
                <div className="file mt-3 d-flex align-items-center " >
                  <span style={{ whiteSpace: "nowrap" }}>Image: </span>
                  <input className="input100" type="file" name="img_url" style={{ height: "auto" }} />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="file mt-3 d-flex align-items-center" >
                  <span style={{ whiteSpace: "nowrap" }}>Thumb: </span>
                  <input className="input100" type="file" name="img_thumb" style={{ height: "auto" }} />
                </div>
              </div>
                <div class="container-login100-form-btn m-t-17">
                  <button class="login100-form-btn" style={{ backgroundColor: "#815fdd" }}>Save</button>
                </div>
            </div>
          </div>
        </div>
        <div className="row border-bottom mt-5 pb-4">
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
            {/* <h5 className="text-center">Thêm chương</h5> */}
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
        </div>
      </Fragment>
    )
  }
}

export default Manager;
