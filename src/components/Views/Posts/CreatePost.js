import React, { useState, useEffect} from 'react';

import Header from '../../Global/Header/Header';
import HeroTitle from '../../Global/HeroTitle/HeroTitle';
import Input from '../../FormComponents/Input/Input';
import InputArea from '../../FormComponents/InputArea/InputArea';
import Instance from '../../Api/Services/Services';
import SubmitButton from '../../FormComponents/SubmitButton/SubmitButton';

import autosize from 'autosize';

const CreatePost = (props) => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const classes = {
        heroContainer: 'lg:shadow-lg rounded-2xl mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 w-full lg:py-8 sm:py-6 py-4 lg:flex lg:flex-col h-90 lg:mb-20',
        newPostContainer: 'flex justify-center h-full flex-col',
        titleContainer: 'm-20 mb-8 mt-0 text-blue text-xl',
        btnContainer: 'flex justify-end items-center mt-6',
    }

    const submit = (e) => {
        e.preventDefault();

        let title = e.target.elements.postTitle?.value;
        let content = e.target.elements.postContent?.value;

        if (handleValidation()) {
            let payload = {
                title,
                content,
            }
            Instance.post(`/posts/${localStorage.getItem('mentiaUsername')}`, payload)
                .then(() => {
                    props.history.push('/posts')
                })
                .catch(() => {
                    errors["result"] = 'Algo salió mal'
                    setErrors(errors);
                });
        }
    }

    useEffect(() => {
        autosize(document.querySelector('textarea'));
    });

    const handleChange = (field, e) => {
        setErrors({});
        fields[field] = e.target.value;
        setFields(fields);
    }

    const handleValidation = () => {
        const err = {};

        if (!fields['postTitle']) {
            err['postTitle'] = "Parece que el Título está vacío.";
        }


        if (!fields['postContent']) {
            err['postContent'] = "Parece que el post está vacío."
        }

        setErrors(err);

        return Object.keys(err).length === 0 ? true : false; 
    }

    return (
        <div>
            <Header/>
            <HeroTitle
                firstMessage={'Nuevo Post'}
            />
            <div className={classes.heroContainer}>
                <div className={classes.newPostContainer}>
                    <form onSubmit={submit} className='w-full h-full'>
                        <Input
                            type={'text'}
                            id={'postTitle'}
                            placeholder={'Mi nuevo día'}
                            className={'text-lg'}
                            name={'postTitle'}
                            errors={errors}
                            onChange={handleChange.bind(this, 'postTitle')}
                        />
                        <InputArea
                            id={'postContent'}
                            placeholder={'¡Cuéntame cómo te fue hoy!'}
                            name={'postContent'}
                            errors={errors}
                            onChange={handleChange.bind(this, 'postContent')}
                        />

                        <div className={classes.btnContainer}>
                            <SubmitButton type='submit' buttonName={"Guardar"}/>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    );

}

export default CreatePost;