import React, { useRef, useState } from 'react';
import Form from '../form/form'
import FormInput from '../form/form-input/form-input'
import FormButton from '../form/form-button/form-button'
import { registerNewUser } from '../../../firebase/firebase.utils'
import { withRouter } from 'react-router-dom'

const initialFormValidationState = {
    passwordErrorClass: "",
    emailErrorClass: "",
    emailValidationMessage: "",
    passwordValidationMessage: "",
    generalError: false
}

const RegisterForm = props => {

    const [formValidationState, setFormValidationState] = useState(initialFormValidationState);

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const registerUser = () => {
        setFormValidationState(initialFormValidationState);
        setTimeout(() => validateForm(), 100)
    }

    const validateForm = async () => {

        const validationObject = await registerNewUser(name.current.value, email.current.value, password.current.value, confirmPassword.current.value);

        if (validationObject.isValid) {
            props.history.push('/sign-in');
        }
        else if (validationObject.passwordErrorMessage !== "") {
            setFormValidationState({
                ...initialFormValidationState,
                passwordErrorClass: "error",
                passwordValidationMessage: validationObject.passwordErrorMessage
            })
        }
        else if (validationObject.passwordsDoNotMatch) {
            setFormValidationState({
                ...initialFormValidationState,
                passwordErrorClass: "error",
            })
        }
        else if (validationObject.emailInvalid) {
            setFormValidationState({
                ...initialFormValidationState,
                emailErrorClass: "error",
                emailValidationMessage: validationObject.emailErrorMessage
            })
        }
        else if (validationObject.generalError) {
            setFormValidationState({
                ...initialFormValidationState,
                generalError: true
            })
        }
    }

    return (
        <Form submit={() => registerUser()}>
            <FormInput
                reference={name}
                type="text"
                name="Name"
                required />
            <FormInput
                reference={email}
                type="email"
                name="Email"
                classes={formValidationState.emailErrorClass}
                showErrorMessage={formValidationState.emailValidationMessage !== "" ? true : false}
                errorMessage={formValidationState.emailValidationMessage}
                required />
            <FormInput
                reference={password}
                type="password"
                name="Password"
                classes={formValidationState.passwordErrorClass}
                showErrorMessage={formValidationState.passwordValidationMessage !== "" ? true : false}
                errorMessage={formValidationState.passwordValidationMessage}
                required />
            <FormInput
                reference={confirmPassword}
                type="password"
                name="Confirm Password"
                classes={formValidationState.passwordErrorClass}
                lastInput
                required />

            <FormButton type="submit">Register</FormButton>

            {formValidationState.generalError ? <span style={{ color: "red" }}>There was a problem creating your account.</span> : null}
        </Form>
    )
}

export default withRouter(RegisterForm);