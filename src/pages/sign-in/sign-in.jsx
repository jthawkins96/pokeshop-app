import React from 'react';
import './sign-in.scss';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form';


const SignInPage = () => {
    return (
        <div className="sign-in-form-container">
            <SignInForm/>
        </div>
    )
}

export default SignInPage;