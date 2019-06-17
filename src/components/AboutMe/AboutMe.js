import React, {Component, Fragment} from "react";
import logo from '../../images/logo-black.svg';

class AboutMe extends Component {

    render(){
        return (
           <Fragment>
            <div className="brand">
            <img src={logo} alt="igo logo"/>
          </div>
          <div className="about-me">
            <div>
              <h1>Leigh Igoe - Developer</h1>
              <h2>A <span>dev</span> with a background in design and a growing passion for <span>code</span>.</h2>
              
            </div>
          </div>
          <div className="social-footer">
          </div>
          </Fragment> 
        )
    }
}

export default AboutMe;