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
          <div className="lightSwitch">
            <svg onClick={(e) => this.turnLightsOn()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.997-3.826 1.968-5.513.912-1.585 1.774-3.083 1.774-4.753 0-3.108-2.517-4.734-5.004-4.734-2.483 0-4.996 1.626-4.996 4.734 0 1.67.862 3.168 1.774 4.753.971 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.753.341h-1.093c-.288 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659z"/></svg>
          </div>
          { this.state.introOpen === true && this.state.lightsOn === false ? <Intro introToggle={this.openMoreDetails} /> : "" }
        
          { this.state.introOpen === false ? <AboutMe introToggle={this.openMoreDetails} /> : "" }

          
        </div>
        <Instagram introOpen={this.state.introOpen} lightSwitch={this.state.lightsOn} />
      </div>
    );
  } 
}

export default App;