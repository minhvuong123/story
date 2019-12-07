import React, { Component } from 'react'
import StoryDashBoard from '../storyDashboard';
import StoryDetail from '../../components/storyDetail';
import Stories from '../../components/stories';
import Login from '../../users/login';
import Register from '../../users/register';

import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import "./main.css";
import Profile from '../../users/profile';
import Manager from '../../users/manager';


class Main extends Component {
  render() {
    const {location} = this.props
    
    return (
      <div className="main">
        <div className="container pb-5 mb-5">
          <Switch location={location}>
            <Route exact path="/" component={StoryDashBoard} />
            <Route path="/home" component={StoryDashBoard} />
            <Route path="/category" component={Stories} />
            <Route path="/category/:catName" component={StoryDetail} />
            <Route path="/stories/:slug" component={StoryDetail} />
            <Route path="/manager" component={Manager} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/:user" component={Profile} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Main);
