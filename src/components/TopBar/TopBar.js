import React, {Component} from 'react';
import './TopBar.scss';
import logo from '../../images/logo.svg';

class TopBar extends Component {
    render() {
        return(
            <div className="top-bar">
                <div className="top-bar__inner">
                    <div className="top-bar__brand">
                        <img src={logo} alt="igo logo"/>
                    </div>
                    <div className="top-bar__details">
                        <p>Leigh Igoe - Frontend developer</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default TopBar;