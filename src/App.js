import React, { Component } from 'react';
import logo from './logo.svg';
import { TweenLite, Expo, TimelineLite, Power1} from 'gsap';
import Carousel from './Components/carousel.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.timeLine = new TimelineLite({ paused: true })
  }

  state = {
    component: [<Carousel />],
  }

  getStarted = () => {

    // fade-out Get-Started-Container and change background gradient
    this.timeLine.to(this.background, 3, {
      backgroundImage: "linear-gradient(to right top, #051937, #004870, #007d9f, #00b6bc, #24eec4)"
    }, 0).to(this.getStartedContainer, 0.75, {
      opacity: 0,
      ease: Power1.easeInOut,
      display: 'none',
    }, 0)

    // fade in Content-Container
    this.timeLine.to(this.contentRef, 1, {
      opacity: 1,
      display: 'flex',
      ease: Power1.easeInOut
    }, .75)

    // play timeline
    this.timeLine.play()

  }

  render() {
    return (
      <div className="App" ref={div => this.background = div}>

        <div className="Get-Started-Container" ref={div => this.getStartedContainer = div}>
          <div onClick={this.getStarted}>
            <h1 style={{color: 'white'}}>Get Started</h1>
          </div>
        </div>

        <div className="Content-Container" ref={div => this.contentRef = div}>
          {this.state.component[0]}
        </div>

      </div>
    );
  }
}

export default App;


// <div class="slider">
//   <div class="slider-wrapper flex">
//
//     <div class="slide flex">
//       <div class="slide-image slider-link prev"><img src="https://goranvrban.com/codepen/img2.jpg"><div class="overlay"></div></div>
//       <div class="slide-content">
//         <div class="slide-date">30.07.2017.</div>
//         <div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
//         <div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
//         <div class="slide-more">READ MORE</div>
//       </div>
//     </div>
//
//     <div class="slide flex">
//       <div class="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img3.jpg"><div class="overlay"></div></div>
//       <div class="slide-content">
//         <div class="slide-date">30.08.2017.</div>
//         <div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
//         <div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
//         <div class="slide-more">READ MORE</div>
//       </div>
//     </div>
//
//     <div class="slide flex">
//       <div class="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img5.jpg"><div class="overlay"></div></div>
//       <div class="slide-content">
//         <div class="slide-date">30.09.2017.</div>
//         <div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
//         <div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
//         <div class="slide-more">READ MORE</div>
//       </div>
//     </div>
//
//     <div class="slide flex">
//       <div class="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img6.jpg"><div class="overlay"></div></div>
//       <div class="slide-content">
//         <div class="slide-date">30.10.2017.</div>
//         <div class="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
//         <div class="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex. </div>
//         <div class="slide-more">READ MORE</div>
//       </div>
//     </div>
//
//   </div>
//
//   <div class="arrows">
//     <a href="#" title="Previous" class="arrow slider-link prev"></a>
//     <a href="#" title="Next" class="arrow slider-link next"></a>
//   </div>
// </div>
//
// ( function($) {
//
//   $(document).ready(function() {
//
//     var s           = $('.slider'),
//         sWrapper    = s.find('.slider-wrapper'),
//         sItem       = s.find('.slide'),
//         btn         = s.find('.slider-link'),
//         sWidth      = sItem.width(),
//         sCount      = sItem.length,
//         slide_date  = s.find('.slide-date'),
//         slide_title = s.find('.slide-title'),
//         slide_text  = s.find('.slide-text'),
//         slide_more  = s.find('.slide-more'),
//         slide_image = s.find('.slide-image img'),
//         sTotalWidth = sCount * sWidth;
//
//     sWrapper.css('width', sTotalWidth);
//     sWrapper.css('width', sTotalWidth);
//
//     var clickCount  = 0;
//
//     btn.on('click', function(e) {
//       e.preventDefault();
//
//       if( $(this).hasClass('next') ) {
//
//         ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
//       } else if ( $(this).hasClass('prev') ) {
//
//         ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
//       }
//       TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
//
//
//       //CONTENT ANIMATIONS
//
//       var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
//       var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
//
//       TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
//       TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
//       TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
//       TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
//       TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
//
//     });
//
//   });
// })(jQuery);
//
// $('.overlay').addClass('overlay-blue');
