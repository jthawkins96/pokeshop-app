import React, { useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Form from '../form/form';
import FormButton from  '../form/form-button/form-button';
import FormInput from '../form/form-input/form-input';
import { withRouter } from 'react-router-dom'
import { startGoogleSignIn, startEmailSignIn } from '../../../redux/user/userActions';
import { selectSignInErrorMessage } from '../../../redux/user/userSelectors'

const SignInForm = props => {

    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <Form>
            <FormInput reference={emailRef} type="email" name="Email" required/>
            <FormInput reference={passwordRef} type="password" name="Password" lastInput required />
            
            <div style={{ display: 'flex' }}>
                <FormButton classes="margin" type="button" click={ () => props.startEmailSignIn(emailRef.current.value, passwordRef.current.value) }>Log In</FormButton>
                <FormButton type="button" click={ props.signInWithGoogle }>Sign In With Google</FormButton>
            </div>
            { props.hasError ? <p style={{ color: "red", width:"100%", textAlign:"center" }}>Invalid username or password.</p> : null }
            
        </Form>
    )
}

const mapStateToProps = state => ({
    hasError: selectSignInErrorMessage(state)
})

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(startGoogleSignIn()),
    startEmailSignIn: (username, password) => dispatch(startEmailSignIn(username, password))
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SignInForm);