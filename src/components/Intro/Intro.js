import React, {Component, Fragment} from "react";
import logo from '../../images/logo-yellow.svg';

class Intro extends Component {

    constructor(props){
      super(props);
    }

    render(){
        return (
           <Fragment>
            <div className="brand">
            <img src={logo} alt="igo logo"/>
          </div>
          <div className="intro-content">
            <div>
              <h1>Leigh Igoe - Developer</h1>
              <h2>A <span>dev</span> with a background in design and a growing passion for <span>code</span>.</h2>
              <div className="skills-list">
                <ul>
                  <li>HTML5 </li>
                  <li>CSS3 + Sass</li>
                  <li>Javascript (ES5/ES6)</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Gsap</li>
                  <li>JQuery</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                  <li>Concrete 5</li>
                  <li>Processwire</li>
                  <li>Hubspot</li>
                  <li>Eloqua</li>
                </ul>
                <span onClick={(e) => this.props.lightSwitch()} className="btn">More about me</span>
              </div>
            </div>
          </div>
          <div className="social-footer">
          </div>
          </Fragment> 
        )
    }
}

export default Intro;