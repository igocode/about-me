import React, { Component } from 'react';
// import DataProvider from './data/ContextData.js';
import Instagram from './components/InstaBackground/InstaBackground.js';
import Intro from './components/Intro/Intro.js';
import AboutMe from './components/AboutMe/AboutMe.js';

import './css/style.scss';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      lightsOn: false,
      introOpen: true
    }
  }

  turnLightsOn = () => {
    console.log('test');
    this.setState({
      lightsOn: !this.state.lightsOn,
      introOpen: false
    })
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          { this.state.introOpen === true ? <Intro lightSwitch={this.turnLightsOn} /> : <AboutMe /> }
        </div>
        <Instagram introOpen={this.state.introOpen} lightSwitch={this.state.lightsOn} />
      </div>
    );
  } 
}

export default App;
