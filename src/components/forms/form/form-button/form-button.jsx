import React from 'react';
import './form-button.scss';

const FormButton = props => {
    return (
    <button onClick = {props.click} className={`form-btn ${props.classes}`} type={props.type}>{props.children}</button>
    )
}

export default FormButton;