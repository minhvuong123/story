import React, { Component, Fragment } from 'react';
import Recommended from '../../components/recommended';
import NewUpdate from '../../components/newUpdate';
import NewComplete from '../../components/newComplete';

import { connect } from 'react-redux';
import axios from 'axios';

import {  
  getStories,
  getChaptersNew,
} from '../../redux/actions';

import { api } from '../../constants';

import './dashboard.css';


class StoryDashBoard extends Component {
  componentDidMount(){
    const { getStories, getChaptersNew } = this.props
    axios.post(
            `${api}/story`, 
            {
              page: 1,
              limit: 10
            }
          )
          .then(res => {
            const stories = res.data.stories;
            getStories(stories);
          })
          .catch(err => {
            console.log(err);
          })


    axios.post(
            `${api}/chapter/new`, 
            {
              page: 1,
              limit: 10
            }
          )
          .then(res => {
            const chapters = res.data.chapters;
            getChaptersNew(chapters);
          })
          .catch(err => {
            console.log(err);
          })
  }
  render() {
    const { stories, chapterNews } = this.props;    
    return (
      <Fragment>
          {
            stories 
            &&  stories.length 
            ?  <Fragment>
                  <Recommended stories={stories} />
                  <NewUpdate chapters={chapterNews} />
                  <NewComplete stories={stories} />
                </Fragment> : ""
          }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  stories: state.storyReducer.stories,
  chapterNews: state.storyReducer.chapterNews,
})

const mapDispatchToProps = dispatch => ({
  getStories: stories => dispatch(getStories(stories)),
  getChaptersNew: chapters => dispatch(getChaptersNew(chapters)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDashBoard)

