import React from 'react';
import './register.scss';
import RegisterForm from '../../components/forms/register-form/register-form';

const RegisterPage = () => {
    return (
        <div className="register-form-container">
            <RegisterForm/>
        </div>
    )
}

export default RegisterPage;