import React, { Component } from 'react'
import Pagination  from 'react-paginate';

import './description.css';

class StoryDescription extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Giới thiệu</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Danh sách chương</a>
          </div>
        </nav>
        <div className="tab-content mt-4" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            Thiên Vũ Đại Lục một đại truyền kỳ Tần Trần , bởi vì bạn chí cốt phản bội ngoài ý muốn ngã xuống Vũ Vực . Ba trăm năm sau , hắn chuyển kiếp ở một cái nhận hết khi dễ Vương phủ trên thân con tư sinh , lợi dụng kiếp trước tạo nghệ , ngưng Thần Công , luyện Thần Đan , nghịch thiên chi lộ , quật khởi mạnh mẽ , từ đó bước trên một đoạn khiếp sợ đại lục kinh thế hành trình .
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <Pagination  
              previousLabel={<span className="lnr lnr-chevron-left"></span>}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              nextLabel={<span class="lnr lnr-chevron-right"></span>}
              breakLabel={'...'}
              breakClassName={'break-me disabled'}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination mt-4 justify-content-center'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
            />
            <div className="row">
              <div className="col-sm-4">
                <div className="chapter-item">
                  <a href="#" title="Chuong 517:  Đại kết cục một điều kiện cuối cùng">
                    Chuong 517:  Đại kết cục một điều kiện cuối cùng
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 516: Hoàn mỹ dung hợp chi song thần chiến song thần">
                    Chuong 516: Hoàn mỹ dung hợp chi song thần chiến song thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 515: Quyết chiến cuối cùng">
                    Chuong 515: Quyết chiến cuối cùng
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title=" Chuong 514: Thần hồn về vị trí cũ Hải Thần trở lại">
                    Chuong 514: Thần hồn về vị trí cũ Hải Thần trở lại
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title=" Chuong 513: Dung hợp hoàn mỹ Thần Quang Phục Sinh">
                    Chuong 513: Dung hợp hoàn mỹ Thần Quang Phục Sinh
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 512: Hải Thần vẫn lạc">
                    Chuong 512: Hải Thần vẫn lạc
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 511: Thiên sứ cùng La sát">
                    Chuong 511: Thiên sứ cùng La sát
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 510: La Sát thần xuất hiện Hải Thần hay Tu La Thần">
                    Chuong 510: La Sát thần xuất hiện Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 509: Thái dương Thiên sứ Hải Thần hay Tu La Thần">
                    Chuong 509: Thái dương Thiên sứ Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 508: Toàn thành tràn ngập lục u u Hải Thần hay Tu La Thần">
                    Chuong 508: Toàn thành tràn ngập lục u u Hải Thần hay Tu La Thần
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="chapter-item">
                  <a href="#" title="Chuong 507: Cửu Bảo Vô Địch Thần Quang Hải Thần hay Tu La Thần">
                    Chuong 507: Cửu Bảo Vô Địch Thần Quang Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 506: Lục quái phát uy binh lâm thành hạ Hải Thần hay Tu La Thần">
                    Chuong 506: Lục quái phát uy binh lâm thành hạ Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 505: Siêu cấp dung hợp kỹ U Minh Bạch Hổ Hải Thần hay Tu La Thần">
                    Chuong 505: Siêu cấp dung hợp kỹ U Minh Bạch Hổ Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 504: Tuyệt thế song thần quyết chiến trên cao mười dặm Hải Thần hay Tu La Thần">
                    Chuong 504: Tuyệt thế song thần quyết chiến trên cao mười dặm Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 503: Gia Lăng quan song thần hàng lâm Hải Thần hay Tu La Thần">
                    Chuong 503: Gia Lăng quan song thần hàng lâm Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 502: Lựa chọn của Tiểu Vũ Ma Kiếm nhập thể Hải Thần hay Tu La Thần">
                    Chuong 502: Lựa chọn của Tiểu Vũ Ma Kiếm nhập thể Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 501: Thất quái phong hào cùng Tu La thần lực tái sinh Hải Thần hay Tu La Thần">
                    Chuong 501: Thất quái phong hào cùng Tu La thần lực tái sinh Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title=" Chuong 500: Thực Thần và Cửu Thải Thần Nữ Hải Thần hay Tu La Thần">
                    Chuong 500: Thực Thần và Cửu Thải Thần Nữ Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 499: Sóng biếc Hải Thần xanh thẳm vô tận Hải Thần hay Tu La Thần">
                    Chuong 499: Sóng biếc Hải Thần xanh thẳm vô tận Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 498: Hải Thần và Thiên Sứ Thần Hải Thần hay Tu La Thần">
                    Chuong 498: Hải Thần và Thiên Sứ Thần Hải Thần hay Tu La Thần
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="chapter-item">
                  <a href="#" title="Chuong 497: Hải Thần Đường Tam Hải Thần hay Tu La Thần">
                    Chuong 497: Hải Thần Đường Tam Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 496: Tấm thân xử nam của ta chỉ dành cho Tiểu Vũ Hải Thần thần trang Hải Thần hay Tu La Thần">
                    Chuong 496: Tấm thân xử nam của ta chỉ dành cho Tiểu Vũ Hải Thần thần trang Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 495: Một chữ tình tâm linh cảm ứng giải cứu Hải Thần hay Tu La Thần">
                    Chuong 495: Một chữ tình tâm linh cảm ứng giải cứu Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 494: Rút ra Hồn cốt Hải Thần tám cánh Hải Thần hay Tu La Thần">
                    Chuong 494: Rút ra Hồn cốt Hải Thần tám cánh Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 493: Hải Thần và Tu La thần Hải Thần hay Tu La Thần">
                    Chuong 493: Hải Thần và Tu La thần Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 492: Truyền thừa bắt đầu Hải Thần Đấu La hiến tế Hải Thần hay Tu La Thần">
                    Chuong 492: Truyền thừa bắt đầu Hải Thần Đấu La hiến tế Hải Thần hay Tu La Thần
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 490: Bảo bối trong đầu Thâm Hải Ma Kình Vương Thâm Hải Ma Kình Vương">
                    Chuong 490: Bảo bối trong đầu Thâm Hải Ma Kình Vương Thâm Hải Ma Kình Vương
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title=" Chuong 489: Trăm vạn năm hồn hoàn cùng Trăm vạn năm hồn cốt Thâm Hải Ma Kình Vương">
                    Chuong 489: Trăm vạn năm hồn hoàn cùng Trăm vạn năm hồn cốt Thâm Hải Ma Kình Vương
                  </a>
                </div>
                <div className="chapter-item">
                  <a href="#" title="Chuong 488: Tiêu diệt Ma kình vương Sát Thần lĩnh vực biến dị Thâm Hải Ma Kình Vương">
                    Chuong 488: Tiêu diệt Ma kình vương Sát Thần lĩnh vực biến dị Thâm Hải Ma Kình Vương
                  </a>
                </div>

                <div className="chapter-item">
                  <a href="#" title="Chuong 487: Đường Tam VS Thâm Hải Ma Kình Vương Thâm Hải Ma Kình Vương">
                    Chuong 487: Đường Tam VS Thâm Hải Ma Kình Vương Thâm Hải Ma Kình Vương
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StoryDescription;
