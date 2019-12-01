import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "./story.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Story from '../story';

class StorySlide extends Component {
  constructor(props) {
    super(props);
    this.refSlide = React.createRef();
  }

  arrowBack = () => {
    this.refSlide.current.slickPrev();
  }

  arrowForward = () => {
    this.refSlide.current.slickNext();
    // console.log(this.refSlide.current.props.children.length);
    console.log(this.refSlide.current);
  }
  
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      beforeChange: (oldIndex, newIndex) => {
        console.log("beforeChange", oldIndex, newIndex);
      },
      afterChange: current => {
        console.log("afterChange", current);
      },
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
      ],
    };
    return (
      <Fragment>
        <div className="row mr-0 ml-0 pb-2 d-flex justify-content-between story-title">
          Phổ biến
          <div className="arrows d-flex align-items-center">
            <div className="arrow-back" onClick={this.arrowBack}><IoIosArrowBack/></div>
            <div className="arrow-forward" onClick={this.arrowForward}><IoIosArrowForward/></div>
          </div>
        </div>
        <Slider {...settings} ref={this.refSlide}>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </Slider>
      </Fragment>
    )
  }
}
export default StorySlide;
