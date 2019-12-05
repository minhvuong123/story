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


import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import "./main.css";
import Profile from '../../users/profile';
import Manager from '../../users/manager';


class Main extends Component {
  render() {
    const {location} = this.props
    
    return (
      <div className="main">
        <div className="container pb-5 mb-5">
          <Wrapper>
            <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={{ enter: 300, exit: 300 }}
                  classNames={'fade'}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={StoryDashBoard} />
                    <Route path="/home" component={StoryDashBoard} />
                    <Route path="/category" component={Stories} />
                    <Route path="/category/:catName" component={StoryDetail} />
                    <Route path="/stories/:id" component={StoryDetail} />
                    <Route path="/manager" component={Manager} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Wrapper>
        </div>
      </div>
    )
  }
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;

export default withRouter(Main);
