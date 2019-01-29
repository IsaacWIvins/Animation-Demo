import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import './carousel.css';


export default class Carousel extends Component {
  state = {
    index: 0,
  }

  _handleClick = (input) => {
    var carouselTimeLine = new TimelineLite({ paused: true })
    var index = this.state.index;
    var newIndex = input === 'Next' ? index + 1 : index - 1;
    const { clientWidth } = this.slide;

    var current_xposition = clientWidth * index * -1;
    var future_xposition = input === 'Next' ? current_xposition - clientWidth : current_xposition + clientWidth;
    console.log('current_xposition: ', current_xposition)
    console.log('future_xposition: ', future_xposition)

    //CONTENT ANIMATIONS
    var sliderFromProps = {
      x: current_xposition,
    }
    var sliderToProps = {
      x: future_xposition,
    }
    var slideFromProperties = {
      x: input === 'Next' ? '50' : '-50',
      y: '15',
    };
    var dateFromProperties = {
      y: '15',
      x: '-10'
    }
    var toProperties = {
      x:'0',
      y:'0'
    };


    carouselTimeLine.fromTo(this.sliderWrapper, 0.6, sliderFromProps, sliderToProps, 0)

    carouselTimeLine.fromTo(this.slide2, 0.4, slideFromProperties, toProperties, 0.2)
    .fromTo(this.slide2, 0.4, slideFromProperties, toProperties, 0.2)
    .fromTo(this.slide3, 0.4, slideFromProperties, toProperties, 0.2)
    .fromTo(this.slide4, 0.4, slideFromProperties, toProperties, 0.2)

    carouselTimeLine.fromTo(this.date1, 0.4, dateFromProperties, toProperties, 0.2)
    .fromTo(this.date2, 0.4, dateFromProperties, toProperties, 0.2)
    .fromTo(this.date3, 0.4, dateFromProperties, toProperties, 0.2)
    .fromTo(this.date4, 0.4, dateFromProperties, toProperties, 0.2)

    carouselTimeLine.eventCallback('onComplete', () => {
      console.log('setting index')
      this.setState({
        index: newIndex
      })
    })
    carouselTimeLine.play()
  }



  render() {
    return (
      <div key='carousel' className="slider" ref={div => this.slider = div}>
        <div className="slider-wrapper flex" ref={div => this.sliderWrapper = div}>

          <div className="slide flex" ref={div => this.slide = div}>
            <div className="slide-image slider-link prev" ref={div => this.sliderLink = div}>
              <img src="https://goranvrban.com/codepen/img2.jpg" ref={div => this.slideImage = div}></img>
            </div>
            <div className="slide-content">
              <div className="slide-date" ref={div => this.date1 = div}>30.08.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>

          <div className="slide flex" ref={div => this.slide2 = div}>
            <div className="slide-image slider-link next">
              <img src="https://goranvrban.com/codepen/img3.jpg"></img>
            </div>
            <div className="slide-content">
              <div className="slide-date" ref={div => this.date2 = div}>30.08.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>

          <div className="slide flex" ref={div => this.slide3 = div}>
            <div className="slide-image slider-link next">
              <img src="https://goranvrban.com/codepen/img5.jpg"></img>
            </div>
            <div className="slide-content">
              <div className="slide-date" ref={div => this.date3 = div}>30.08.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>

          <div className="slide flex" ref={div => this.slide4 = div}>
            <div className="slide-image slider-link next">
              <img src="https://goranvrban.com/codepen/img6.jpg"></img>
            </div>
            <div className="slide-content">
              <div className="slide-date" ref={div => this.date4 = div}>30.08.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>

        </div>

        <div className="arrows">
          { this.state.index <= 0 ? null : <a href="#" title="Previous" className="arrow slider-link prev" onClick={() => this._handleClick('Previous')}></a> }
          { this.state.index >= 3 ? null : <a href="#" title="Next" className="arrow slider-link next" onClick={() => this._handleClick('Next')}></a> }
        </div>
      </div>
    )
  }
}
