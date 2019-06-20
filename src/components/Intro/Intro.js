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
                <span onClick={(e) => this.props.introToggle()} className="btn">More about me</span>
              </div>
            </div>
          </div>
          <div className="social-footer">
            <div class="social-footer__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.01 49.01"><polygon fill="currentColor" points="36.4 16.07 24.4 25.79 12.41 16.07 36.4 16.07"/><polygon fill="currentColor" points="36.41 33.23 12.39 33.23 12.39 18.64 24.4 28.37 36.41 18.64 36.41 33.23"/></svg>
            </div> 
            <div class="social-footer__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.01 49.01"><rect fill="currentColor" x="14.82" y="20.54" width="4.31" height="12.91"/><ellipse fill="currentColor" cx="16.98" cy="16.23" rx="2.37" ry="2.39"/><path fill="currentColor" d="M34.2,33.45H29.9V27.29c0-4.05-4.31-3.7-4.31,0v6.16H21.28V20.54h4.31v2.35c1.87-3.48,8.61-3.74,8.61,3.33Z"/></svg>
            </div>
            <div class="social-footer__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.01 49.01"><path fill="currentColor" d="M24.4,16.11c2.78,0,3.11,0,4.21.06,2.83.13,4.14,1.47,4.27,4.27,0,1.1.06,1.43.06,4.21s0,3.11-.06,4.21c-.13,2.8-1.44,4.14-4.27,4.27-1.1,0-1.42.06-4.21.06s-3.11,0-4.2-.06c-2.83-.13-4.15-1.48-4.27-4.27,0-1.1-.07-1.43-.07-4.21s0-3.11.07-4.21c.12-2.8,1.44-4.14,4.27-4.27C21.29,16.12,21.62,16.11,24.4,16.11Zm0-1.88c-2.82,0-3.18,0-4.29.07-3.78.17-5.89,2.27-6.06,6.05C14,21.47,14,21.82,14,24.65s0,3.18.06,4.29c.17,3.79,2.27,5.89,6.06,6.06,1.11,0,1.47.06,4.29.06s3.19,0,4.3-.06c3.78-.17,5.89-2.27,6.06-6.06.05-1.11.06-1.46.06-4.29s0-3.18-.06-4.3c-.17-3.77-2.27-5.88-6.06-6.05C27.59,14.25,27.23,14.23,24.4,14.23Zm0,5.07a5.35,5.35,0,1,0,5.35,5.35A5.35,5.35,0,0,0,24.4,19.3Zm0,8.82a3.47,3.47,0,1,1,3.48-3.47A3.47,3.47,0,0,1,24.4,28.12ZM30,17.84a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,30,17.84Z"/></svg>
            </div>
            <div class="social-footer__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.01 49.01"><path fill="currentColor" d="M33.4,20A13.19,13.19,0,0,1,13.1,31.75,9.3,9.3,0,0,0,20,29.83a4.65,4.65,0,0,1-4.33-3.22,4.62,4.62,0,0,0,2.1-.08A4.66,4.66,0,0,1,14,21.92a4.59,4.59,0,0,0,2.11.58,4.64,4.64,0,0,1-1.44-6.19,13.19,13.19,0,0,0,9.56,4.85,4.65,4.65,0,0,1,7.91-4.24,9.15,9.15,0,0,0,3-1.12,4.74,4.74,0,0,1-2,2.57,9.45,9.45,0,0,0,2.66-.74A9.62,9.62,0,0,1,33.4,20Z"/></svg>
            </div> 
              
          </div>
          </Fragment> 
        )
    }
}

export default Intro;