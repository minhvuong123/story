import React, { Component } from 'react'
import StoryDashBoard from '../storyDashboard';
import StoryDetail from '../../components/storyDetail';
import Stories from '../../components/stories';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";


import "./main.css";

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
