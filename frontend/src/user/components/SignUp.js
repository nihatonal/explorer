import React, { useState } from "react";
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

import { useForm } from "../../shared/hooks/form-hook";

import './SignUp.css'
function SignUp(props) {
    const navigate = useNavigate();
    const { isLoading, error, sendRequest } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
            surname: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
            password_confirm: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const [active, setActive] = useState(true)

    const signupFormHandler = async (e) => {
        e.preventDefault();
        //console.log(formState.inputs)
        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/users/signup",
                "POST",
                JSON.stringify({
                    // name: formState.inputs.name.value,
                    // nickname: formState.inputs.nickname.value,
                    // birthdate: formState.inputs.birthdate.value,
                    // email: formState.inputs.email.value,
                    // phone: formState.inputs.phone.value,
                    // password: formState.inputs.password.value,
                    name: 'deneme',
                    surname: 'deneme',
                    email: 'deneme@gmail.asd',
                    password: 'deneme',
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            console.log(responseData)
            // SignUp.userId = responseData.userId;
            // navigate("/userphoto");
        } catch (err) {
            // SignUp.error = err.message;
            // console.log(SignUp.error);
        }

    };
    return (
        <div className="signup_wrapper">
            <div className="signup_header">
                <button className="sign_up_header_btn"
                    style={active ? { backgroundColor: '#cbe7ff', color: 'var(--color-button)' } : null}
                    onClick={() => setActive(true)}
                >Sign Up</button>
                <button className="sign_up_header_btn"
                    style={!active ? { backgroundColor: '#cbe7ff', color: 'var(--color-button)' } : null}
                    onClick={() => setActive(false)}
                >Sign In</button>
            </div>
            <Input
                id="name"
                element="input"
                type="name"
                label='Name'
                placeholder="Please write your name"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                initialValue={formState.inputs.name.value}
                initialValid={formState.inputs.name.isValid}
            />
            <Input
                id="surname"
                element="input"
                type="name"
                label='Surname'
                placeholder="Please write your surname"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                initialValue={formState.inputs.surname.value}
                initialValid={formState.inputs.surname.isValid}
            />
            <Input
                id="email"
                element="input"
                type="name"
                label='Email'
                placeholder="Please write your email"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                onInput={inputHandler}
                initialValue={formState.inputs.email.value}
                initialValid={formState.inputs.email.isValid}
            />
            <Input
                id="password"
                element="input"
                type="name"
                label='Password'
                placeholder="Please write your name"
                validators={[VALIDATOR_REQUIRE(),
                VALIDATOR_PASSWORD()]}
                onInput={inputHandler}
                initialValue={formState.inputs.password.value}
                initialValid={formState.inputs.password.isValid}
            />
            <Input
                id="password_confirm"
                element="input"
                type="name"
                label='Confirm Password'
                placeholder="Please write your name"
                validators={[VALIDATOR_REQUIRE(),
                VALIDATOR_PASSWORD_CONFIRM(formState.inputs.password.value)]}
                onInput={inputHandler}
                initialValue={formState.inputs.password_confirm.value}
                initialValid={formState.inputs.password_confirm.isValid}
            />
        </div>
    );
}

export default SignUp;