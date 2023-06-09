import React, { useContext, useState, useEffect } from 'react';
import Input from '../shared/components/formElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../shared/util/validators";
import ImageUpload from "../shared/components/formElements/ImageUpload";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from '../shared/context/auth-context';
import { useForm } from "../shared/hooks/form-hook";
import LoadingSpinner from '../shared/UI/LoadingSpinner';
import BlogPreview from './components/BlogPreview';

import './AddPost.css'
function AddPost(props) {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest } = useHttpClient();
    const [previewUrl, setPreviewUrl] = useState();
    const [loadedUser, setLoadedUser] = useState();
    const [data, setData] = useState();
    const [formState, inputHandler, setFormData] = useForm(
        {
            article_title: {
                value: "",
                isValid: false,
            },
            article: {
                value: "",
                isValid: false,
            },
            image: {
                value: null,
                isValid: false
            }
        },
        false
    );
    useEffect(() => {
        if (!formState.inputs.image.value) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(formState.inputs.image.value);
    }, [formState.inputs.image.value]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/users/`
                );
                setLoadedUser(responseData.users.filter(user => user.id === auth.userId)[0]);
                setData({
                    'owner': loadedUser.name + " " +
                        loadedUser.surname,
                    "date": 'June 12, 2020',
                    'owner_image': 'http://localhost:5000/' + loadedUser.image,
                    'title': formState.inputs.article_title.value,
                    'text': formState.inputs.article.value,
                    'image': previewUrl,

                })

            } catch (err) { }
        };
        fetchUsers();

    }, [formState.inputs, previewUrl]);


    const article_desc = formState.inputs.article.value.split('\n').map((item) => <p>{item}</p>);

    return (
        <div className='add_article_container'>
            <div className="add_article_wrapper">
                <form className='add_article_form'>

                    <Input
                        id="article_title"
                        element="input"
                        type="text"
                        label='Article Title'
                        placeholder="Please write title of your article"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValue={'' || formState.inputs.article_title.value}

                    />
                    <ImageUpload
                        center
                        id="image"
                        onInput={inputHandler}
                        errorText="Please provide an image."
                    />
                    <Input
                        id="article"
                        element="textarea"
                        type="text"
                        label='Article'
                        placeholder="Please write your article"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}

                    />

                    <button type='submit' className="submit_article">Send</button>
                </form>
                <div className="preview_article">
                    <BlogPreview data={data} text={article_desc} />
                </div>
            </div>
        </div>
    );
}

export default AddPost;