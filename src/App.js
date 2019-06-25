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
      introOpen: true,
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
      introOpen: !this.state.introOpen
    })
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          { this.state.introOpen === true ? <Switch switch={this.turnLightsOn}></Switch> : "" }

          { this.state.introOpen === true && this.state.lightsOn === false ? <Intro introToggle={this.openMoreDetails} /> : "" }
        
          { this.state.introOpen === false ? <AboutMe introToggle={this.openMoreDetails} /> : "" }
        </div>
        
        <Instagram introOpen={this.state.introOpen} lightSwitch={this.state.lightsOn} />
      </div>
    );
  } 
}

export default App;
