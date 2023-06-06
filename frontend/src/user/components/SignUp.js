import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import bg_image from '../../assets/images/explorer.jpg';

import './SignUp.css'
function SignUp(props) {
    const navigate = useNavigate();
    const { isLoading, error, sendRequest } = useHttpClient();

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
        <div
            className='page-container home_page'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}
        >
            <div className="page-wrapper">
                <div className="signup_wrapper">
                    <button onClick={signupFormHandler}>sign up</button>
                </div>

            </div>
        </div>
    );
}

export default SignUp;