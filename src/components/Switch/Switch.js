import React, {Fragment, useState} from "react";
import './Switch.scss';

const Switch = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const updateSwitch = (e) => {
        e.preventDefault();
        props.switch();
        setIsChecked(!isChecked);
    };
    
     return (
         <Fragment>
            <label onClick={(e) => updateSwitch(e)} className="switch">
                <input checked={isChecked} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </Fragment>
     )
}

export default Switch;
