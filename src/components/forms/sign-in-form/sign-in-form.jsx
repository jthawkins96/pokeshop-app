import React, { useRef, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Form from '../form/form';
import FormButton from  '../form/form-button/form-button';
import FormInput from '../form/form-input/form-input';
import { signInWithEmail } from '../../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom'
import { startGoogleSignIn } from '../../../redux/user/userActions';

const SignInForm = props => {

    const [showErrorMessage, toggleErrorMessage] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const signIn = async signInMethod => {
        const success = await signInMethod();
        if(!success)
            toggleErrorMessage(true);
        else
            props.history.push('/')
    }

    return (
        <Form submit={ () => signIn(signInWithEmail.bind(null, emailRef.current.value, passwordRef.current.value)) }>
            <FormInput reference={emailRef} type="email" name="Email" required/>
            <FormInput reference={passwordRef} type="password" name="Password" lastInput required />
            
            <div style={{ display: 'flex' }}>
                <FormButton classes="margin" type="submit">Log In</FormButton>
                <FormButton type="button" click={ props.signInWithGoogle }>Sign In With Google</FormButton>
            </div>
            {showErrorMessage ? <p style={{ color: "red", width:"100%", textAlign:"center" }}>Invalid username or password.</p> : null}
            
        </Form>
    )
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(startGoogleSignIn())
})

export default compose(withRouter, connect(null, mapDispatchToProps))(SignInForm);