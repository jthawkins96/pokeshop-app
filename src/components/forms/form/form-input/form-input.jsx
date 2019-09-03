import React, { useState } from 'react';
import './form-input.scss';


const FormInput = props => {

    const [focusState, setFocusState] = useState("");

    return (
        <div className={`${ props.lastInput ? "last-input" : ""} input-group`}>
            <input ref={ props.reference }
                   id={ props.name } 
                   className={`form-input ${ props.classes }`} 
                   type={ props.type } name={ props.name } 
                   onFocus={ () => setFocusState("shrink") } 
                   required={ props.required ? true : "" }/>
            <label htmlFor={ props.name } className={`form-label ${ focusState }`}>{ props.name }</label>
            <span className={`error-message ${ props.showErrorMessage }`}>{ props.errorMessage }</span>
        </div>
    )
}


export default FormInput;