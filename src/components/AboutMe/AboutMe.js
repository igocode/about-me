import React, {Component, Fragment} from "react";
import logo from '../../images/logo-black.svg';
import './AboutMe.scss';
class AboutMe extends Component {

    render(){
        return (
           <Fragment>
             <div onClick={(e) => this.props.introToggle()} className="backBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="12.07" height="21.14">
                <path d="M1.5 10.57l9.07-9.07M1.5 10.57l9.07 9.07" style={{fill: "none", stroke: "#000", strokeLinecap: "round", strokeWidth: "3px"}}/>
              </svg>      
              Back
            </div>
            <div className="brand">
            <img onClick={(e) => this.props.introToggle()} src={logo} alt="igo logo"/>
          </div>
          <div className="about-me">
            <div>
              <h1>Leigh Igoe - Developer</h1>
              <h2>Me in a little more detail</h2>
              <p>I am a driven developer with an eagerness to learn new skills whilst also refining my core progamming knowledge. I’ve had the opportunity to work closely with developers either as inhouse or collaborting with client based teams remotely. I am looking to work within an agile focused team of developers who strive to produce performant and scalable websites/applications.  </p>
              <div className="about-me__details">
              <h3 className="about-me__header-divide">Core skills</h3>
              <ul>
                <li>Develop HTML5 complient code.</li>
                <li>Strong knowledge of CSS/CSS3, CSS Pre-processors. This includes the implemention of methodologies such as BEM or Atomic design principles. </li>
                <li>Experience with maintaining pattern libraries for large corporations</li>
                <li>A strong knowldge of ES5 and a continued developing knowledge of ES6.</li>
                <li>Experience in developing with React and Angular.</li>
                <li>Building/setting up projects within Webpack.</li>
                <li>Building websites using PHP for CMS’s such as Wordpress/ProcessWire/Concrete5.</li>
                <li>Developing micosites on platforms using Hubspot or Eloqua.</li>
                <li>Using a task runner such as Gulp/Grunt.</li>
                <li>Experience with using version control systems such as Git. </li>
                <li>Highly skilled in the use of Adobe software, such as Photoshop, 
Illustrator and InDesign.</li>
              </ul>
              <h3 className="about-me__header-divide">Areas I am focussed on developing</h3>
              <ul>
                <li>Broaden my skills using React alongside the use of ES6.</li>
                <li>Building my knowledge and understanding of CI/CD pipelines.</li>
                <li>Learn and implement tests for my work using either Jest or Enzyme.</li>
              </ul>
              </div>

            </div>
          </div>
          <div className="social-footer">
          </div>
          </Fragment> 
        )
    }
}

export default AboutMe;