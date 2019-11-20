import React, { Component } from 'react'

import { MdQueueMusic } from "react-icons/md";
import ListItem from '../listItem';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStatus: false,
    }
  }

  changeListStatus = () => {
    const { listStatus } = this.state;
    this.setState({
      listStatus: !listStatus
    })
  }
  
  render() {
    const { listStatus } = this.state;
    console.log(listStatus);
    
    return (
      <div className="col-2 col-sm-3 pr-0">
        <div className="media-play-list-wrap">
          <div className="media-play-list" onClick={this.changeListStatus}>
            <MdQueueMusic />
            <span className="d-none d-sm-inline-block">Danh sách phát</span>
            <span className="play-list-amount">(27)</span>
          </div>
          <div className={`media-play-list-pop ${listStatus ? 'active' : ''}`}>
            <ul className="play-list-item">
              <ListItem />
              <ListItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayList;
