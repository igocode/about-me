import React, {Component, Fragment} from "react";
import logo from '../../images/logo-black.svg';
import './AboutMe.scss';
class AboutMe extends Component {

    render(){
        return (
           <Fragment>
            <div className="brand">
            <img onClick={(e) => this.props.introToggle()} src={logo} alt="igo logo"/>
          </div>
          <div className="about-me">
            <div>
              <h1>Leigh Igoe - Developer</h1>
              <h2>Always learning and always ready for change</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque.</p>

            </div>
          </div>
          <div className="social-footer">
          </div>
          </Fragment> 
        )
    }
}

export default AboutMe;