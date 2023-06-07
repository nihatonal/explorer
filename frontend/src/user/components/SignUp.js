import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../../shared/components/formElements/Input'
import { useHttpClient } from "../../shared/hooks/http-hook";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_PASSWORD_CONFIRM,
} from "../../shared/util/validators";
import ImageUpload from "../../shared/components/formElements/ImageUpload";
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from "../../shared/hooks/form-hook";

import './SignUp.css'
function SignUp(props) {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    image: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    surname: {
                        value: '',
                        isValid: false
                    },
                    password_confirm: {
                        value: '',
                        isValid: false
                    },
                    image: {
                        value: null,
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = async event => {
        event.preventDefault();
        
        if (!isLoginMode) {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5000/api/users/login",
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );

                auth.login(responseData.userId, responseData.token);
            } catch (err) { }
        } else {
            try {
                const formData = new FormData();
                formData.append('email', formState.inputs.email.value);
                formData.append('name', formState.inputs.name.value);
                formData.append('surname', formState.inputs.surname.value);
                formData.append('password', formState.inputs.password.value);
                formData.append('image', formState.inputs.image.value);
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/signup',
                    'POST',
                    formData
                );

                auth.login(responseData.userId, responseData.token);
            } catch (err) { }
        }
    };

    return (
        <div className="signup_wrapper">
            <div className="signup_header">
                <button className="sign_up_header_btn"
                    style={isLoginMode ? { backgroundColor: '#cbe7ff', color: 'var(--color-button)' } : null}
                    onClick={switchModeHandler}
                >Sign Up</button>
                <button className="sign_up_header_btn"
                    style={!isLoginMode ? { backgroundColor: '#cbe7ff', color: 'var(--color-button)' } : null}
                    onClick={switchModeHandler}
                >Sign In</button>
            </div>
            <form onSubmit={authSubmitHandler} className="sign_up_inputs_wrapper">
                {isLoginMode && <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                />}
                {isLoginMode && <Input
                    id="name"
                    element="input"
                    type="text"
                    label='Name'
                    placeholder="Please write your name"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />}
                {isLoginMode && <Input
                    id="surname"
                    element="input"
                    type="text"
                    label='Surname'
                    placeholder="Please write your surname"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />}
                <Input
                    id="email"
                    element="input"
                    type="name"
                    label='Email'
                    placeholder="Please write your email"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}

                />
                <Input
                    id="password"
                    element="input"
                    type="text"
                    label='Password'
                    placeholder="Please write your name"
                    validators={[VALIDATOR_REQUIRE(),
                    VALIDATOR_PASSWORD()]}
                    onInput={inputHandler}

                />
                {isLoginMode && <Input
                    id="password_confirm"
                    element="input"
                    type="text"
                    label='Confirm Password'
                    placeholder="Please write your name"
                    validators={[VALIDATOR_REQUIRE(),
                    VALIDATOR_PASSWORD_CONFIRM(formState.inputs.password.value)]}
                    onInput={inputHandler}

                />}

                <button type="submit"
                    // disabled={!formState.isValid} 
                    className="signup_button">{!isLoginMode ? 'Sign In' : 'Sign Up'}</button>
            </form>
        </div>
    );
}

export default SignUp;