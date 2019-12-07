import React, { Component, Fragment } from 'react';
import Recommended from '../../components/recommended';
import NewUpdate from '../../components/newUpdate';
import NewComplete from '../../components/newComplete';

import { connect } from 'react-redux';
import axios from 'axios';

import {  
  getStories
} from '../../redux/actions';

import { api } from '../../constants';

import './dashboard.css';


class StoryDashBoard extends Component {
  componentDidMount(){
    const { getStories } = this.props
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
  }
  render() {
    const { stories } = this.props;
    return (
      <Fragment>
          {
            stories 
            &&  stories.length 
            &&  <Fragment>
                  <Recommended stories={stories} />
                  <NewUpdate stories={stories} />
                  <NewComplete />
                </Fragment> 
          }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  stories: state.storyReducer.stories
})

const mapDispatchToProps = dispatch => ({
  getStories: stories => dispatch(getStories(stories))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDashBoard)

