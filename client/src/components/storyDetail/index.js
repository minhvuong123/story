import React, { Component, Fragment } from 'react';
import Pagination from 'react-paginate';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  changeAudio,
  changePlay,
  getStory,
  getChapters,
} from '../../redux/actions';

import { api, apiShare } from '../../constants';

import { IoMdHeartEmpty, IoIosMore, IoIosPlay, IoMdStats } from 'react-icons/io';

import './detail.css';

class StoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapters: [],
      totalPaginate: 0,
    }
  }
  
  componentDidMount(){
    const { getStory, getChapters } = this.props;
    const { slug } = this.props.match.params;
  
    axios.post(
            `${api}/story/detail`, 
            {
              slugName: slug,
              page: 1,
              limit: 10,
            }
          )
          .then(res => {
            const story = res.data.story;
            const chapters = res.data.chapter;
            const totalPaginate = res.data.totalPaginate;
            
            getStory(story);
            getChapters(chapters);
            this.setState({
              chapters,
              totalPaginate,
            })
          })
          .catch(err => {
            console.log(err);
          })
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.slug !== this.props.match.params.slug) {
  //     console.log("khac");
      
  //   }
  // }

  handlePlayAudio = async (e, audio, index) => {
    e.preventDefault();
    const { changeAudio, changePlay, playRef } = this.props;

    // handle active audio
    const { chapters } = this.state;
    //  reset active all chapter
    chapters.forEach(chapter => {
      chapter.active = false;
    });
    // active current chapter
    chapters[index].active = true;
    // update state
    this.setState({
      chapters
    })
    

    // handle active class audio is chosen
      // reset all element is active
      Array.from(document.getElementsByClassName('list-group-item'))
            .forEach(element => {
              element.classList.remove('active');
            })
      // active element is chosen
      document.getElementsByClassName('list-group-item')[index].classList.add('active')

    
    // handle url audito to play control and play
    await changeAudio(audio);
    // solution stack tree of chorme
    const playPromise = playRef.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // console.log("audio played auto");
          playRef.play();
          changePlay(true);
        })
        .catch(() => {
          console.log("playback prevented");
        });
    }
  }

  pauseAudio = () => {
    const { changePlay, playRef } = this.props;
    playRef.pause();
    changePlay(false);
  }

  handlePageClick = ({selected}) => {
    const { slug } = this.props.match.params;
    axios.post(
      `${api}/story/detail`, 
      {
        slugName: slug,
        page: selected + 1,
        limit: 10,
      }
    )
    .then(res => {
      const story = res.data.story;
      const chapters = res.data.chapter;
      const totalPaginate = res.data.totalPaginate;
      
      getStory(story);
      getChapters(chapters);
      this.setState({
        chapters,
        totalPaginate,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { story, play } = this.props;
    const { chapters, totalPaginate } = this.state;
    return (
      <Fragment>
        {
          story
          &&  <div className="row mb-5 story-detail">
                <div className="col-sm-4 text-center">
                  <div className="story-thumb">
                    <img src={`${apiShare}/${story.imgUrl}`} alt=""/>
                    <div className="thumb-play-opacity">
                      {
                        play ? <IoMdStats /> : <IoIosPlay />
                      }
                    </div>
                  </div>
                  <h4 className="mt-3 text-center">Theo Hỗn Độn Thể Bắt Đầu</h4>
                  <div className="text-center mt-3">
                    <a className="z-btn">
                      <span style={{fontSize: '20px'}}>
                        {
                          play ? <IoMdStats /> : <IoIosPlay />
                        }
                      </span> Tiếp tục phát
                    </a>
                  </div>
                  <div className="text-center mt-3" style={{fontSize: '13px', color: '#999'}}>14 audio truyện - 1 giờ 6 phút</div>
                </div>
                <div className="col-sm-8">
                  <ul className="list-group">
                    {
                      chapters 
                      &&  chapters.length
                      &&  chapters.map((chapter, index) => {
                            return  <Fragment key={chapter.id}>
                                      <li className="list-group-item mb-0 pr-0 pl-0 pb-2 pt-2">
                                        <div className="content d-flex align-items-center">
                                          <div className="index p-2">{chapter.chapterNumber}</div>
                                          <a  className="thumb" 
                                              title="Theo Hỗn Độn Thể Bắt Đầu">
                                            <img className="img-responsive" src={`${apiShare}/${story.imgThumb}`} alt="Theo Hỗn Độn Thể Bắt Đầu" />
                                            {
                                              play && chapter.active
                                              ? <div className="thumb-play-opacity"
                                                      onClick={this.pauseAudio}> 
                                                  <IoMdStats />     
                                                </div>
                                              : <div className="thumb-play-opacity"
                                                      onClick={(e) => this.handlePlayAudio(e, chapter.audio, index)}> 
                                                  <IoIosPlay />
                                                </div>
                                            }
                                          </a>
                                          <div className="info flex-column">
                                            <h2 className="name mb-0 pr-2 pl-2">
                                              <a  href="https://truyenaudiocv.com/huyen-huyen-theo-hon-don-the-bat-dau" 
                                                  title={story.name}>
                                                  {chapter.name ? chapter.name : story.name + ' ' + chapter.chapterNumber}
                                              </a>
                                            </h2>
                                          <div className="author pr-2 pl-2">{story.author}</div>
                                          </div>
                                          <div className="z-duration pr-2 pl-2 d-none d-sm-inline-block">04:30</div>
                                          <div className="extension">
                                            <ul>
                                              <li><IoMdHeartEmpty /></li>
                                              <li className="dropdown">
                                                <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  <IoIosMore />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                  <a className="dropdown-item" href="/">Thêm vào danh sách phát</a>
                                                  <a className="dropdown-item" href="/">Tải xuống</a>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </li>
                                    </Fragment>
                      })
                    }
                  </ul>
                  <Pagination
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
                  />
                </div>
              </div>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  play: state.playReducer.play,
  playRef: state.playReducer.playRef,
  story: state.storyReducer.story,
  chapters: state.storyReducer.chapters,
})

const mapDispatchToProps = dispatch => ({
  getStory: story => dispatch(getStory(story)),
  getChapters: chapters => dispatch(getChapters(chapters)),
  changeAudio: audio => dispatch(changeAudio(audio)),
  changePlay: status => dispatch(changePlay(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail)
