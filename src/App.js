import React, { Component } from 'react';
// import DataProvider from './data/ContextData.js';
import Instagram from './components/InstaBackground/InstaBackground.js';
import Intro from './components/Intro/Intro.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Switch from './components/Switch/Switch.js';

import './css/style.scss';
class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      lightsOn: false,
      introActive: true,
      aboutMeActive: false,
    }
  }

  turnLightsOn = () => {
    this.setState({
      lightsOn: !this.state.lightsOn,
    })
  }

  openMoreDetails = () => {
    this.setState({
      lightsOn: !this.state.lightsOn,
      introActive: !this.state.introActive,
      aboutMeActive: !this.state.aboutMeActive
    })
  }
  
  render() {
    let wrapperClass = 'wrapper ';
    wrapperClass += (this.state.introActive === true || this.state.aboutMeActive === false) && this.state.lightsOn === true ? "click-through" : "";

    return (
      <div>
        { this.state.introActive === true ? <Switch switch={this.turnLightsOn}></Switch> : "" }

        <div className={wrapperClass}>
          { this.state.introActive === true && this.state.lightsOn === false ? <Intro introToggle={this.openMoreDetails} /> : "" }
          { this.state.aboutMeActive === true ? <AboutMe introToggle={this.openMoreDetails} /> : "" }
        </div>
        
        <Instagram introActive={this.state.introActive} lightSwitch={this.state.lightsOn} />
      </div>
    );
  } 
}

export default App;
