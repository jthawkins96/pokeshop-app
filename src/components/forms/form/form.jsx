import React from 'react';
import './form.scss';

const Form = props => {
    return (
        <form onSubmit={ (e) => { e.preventDefault(); props.submit(); } }>
            { props.children }
        </form>
    )
}

export default Form;