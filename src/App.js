import React, { Component } from 'react';
import logo from './logo.svg';
import ChatBubbles from './Animations/chatBubbles.js';
import { TweenLite, Expo, TimelineLite, Power1} from 'gsap';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.timeLine = new TimelineLite({ paused: true })
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
          <div className="Left-Box" ref={div => this.leftBox = div}>
            <h1>left</h1>
          </div>
          <div className="Right-Box" ref={div => this.rightBox = div}>
            <h1>right</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
