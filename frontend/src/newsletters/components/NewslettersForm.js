import React, { useState } from 'react';
import Input from '../../shared/components/formElements/Input'

import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook";
import './NewsLettersForm.css';
function NewslettersForm(props) {
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const [value, setValue] = useState();
    const [checked, setChecked] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (formState.isValid) {
            console.log(formState.isValid)
            console.log(formState.inputs)
            console.log(checked)
        }

    }
    return (
        <form className="newsletters_form" onSubmit={submitHandler} >
            <div className="newsletters_input_wrapper">
                <Input
                    id="email"
                    element="input"
                    type="email"
                    placeholder="Your email address"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    initialValue={formState.inputs.email.value}
                    initialValid={formState.inputs.email.isValid}
                />
                <button
                    type='submit'
                    className={formState.isValid && checked ? "newsletters_btn newsletters_btn_active" : 'newsletters_btn newsletters_btn_disabled'}
                    disabled={formState.isValid && !checked}
                >Join Free</button>
            </div>
            <div className="newsletters_form_privacy_policy_container">
                <div className="newsletters_form_privacy_policy_wrapper"
                    style={formState.isValid ? { top: '0' } : null}
                >
                    <input type="checkbox" id='policy_check' className='custom-checkbox' onChange={() => setChecked(!checked)} />
                    <label htmlFor="policy_check"></label>
                    <p>Yes, I’d like to receive additional marketing emails on hot business opportunities from Trends, by the Hustle.</p>
                    <p className="newsletters_form_privacy_policy_desc">We're committed to your privacy. The Hustle uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
                </div>
            </div>
        </form>
    );
}

export default NewslettersForm;