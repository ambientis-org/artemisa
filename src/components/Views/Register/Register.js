import React, { useState } from 'react';

import Input from '../../FormComponents/Input/Input';
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import Instance from "../../Api/Services/Services";


const Register = (props) => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        let username =  e.target.elements.username?.value;
        let name =  e.target.elements.name?.value;
        let lastname =  e.target.elements.lastname?.value;
        let birthdate =  new Date(e.target.elements.birthdate?.value);
        let genre =  e.target.elements.genre?.value;

        if (handleValidation()) {
            let payload = {
                email,
                password,
                username,
                name,
                lastname,
                birthdate,
                genre
            }
            Instance.post('/register', payload)
                .then((response) => {
                    Instance.post(`/newJournal/${username}`)
                        .then(props.history.push('/'));
                })
                .catch((response) => {
                    errors["result"] = 'Algo salió mal'
                    setErrors(errors);
                });
        }
    }

    const handleChange = (field, e) => {
        setErrors({});
        fields[field] = e.target.value;
        setFields(fields);
    }

    const handleValidation = () => {
        const err = {};

        if (!fields['email']) {
            err['email'] = "Parece que el email está vacío.";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                err["email"] = "Esto no parece ser un email...";
            }
        }

        if (!fields['password']) {
            err['password'] = "Parece que la contraseña está vacía."
        }

        if (!fields['passwordConfirm']) {
            err['passwordConfirm'] = "Parece que este campo está vacío."
        }

        if (fields.passwordConfirm !== fields.password) {
            err['password'] = "Las contraseñas no coinciden"
        }

        if (!fields['username']) {
            err['username'] = "Parece que el usuario está vacío."
        }

        if (!fields['name']) {
            err['name'] = "Parece que el nombre está vacío."
        }

        if (!fields['lastname']) {
            err['lastname'] = "Parece que el apellido está vacío."
        }

        if (!fields['birthdate']) {
            err['birthdate'] = "Parece que tu fecha de nacimiento está vacía."
        }

        setErrors(err);

        return Object.keys(err).length === 0 ? true : false; 
    }

    const classes = {
        pageBody: 'h-screen flex bg-gray place-items-center',
        formContainer:
            'w-full max-w-lg m-auto bg-white rounded-lg lg:shadow-lg py-10 px-16 text-left',
        formHeading: 'text-2xl font-medium text-primary mt-4 mb-12',
        btnContainer: 'flex justify-center items-center mt-6',
    };

    return (
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                <h1 className={classes.formHeading}>
                    ¡Bien! Llenemos este formulario 🖋
                </h1>

                    <form onSubmit={submit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='me@example.com'
                                    labelName='Correo electrónico'
                                    className='py-3 px-4 mb-3  w-full'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'email')}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='username'
                                    name='username'
                                    type='text'
                                    placeholder='janedoe'
                                    labelName='Nombre de usuario'
                                    className='py-3 px-4 w-full'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'username')}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='password'
                                    name='password'
                                    type='password'
                                    placeholder='************'
                                    labelName='Contraseña'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'password')}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='passwordConfirm'
                                    name='passwordConfirm'
                                    type='password'
                                    placeholder='************'
                                    labelName='Confirmar contraseña'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'passwordConfirm')}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Jane'
                                    labelName='Nombre(s)'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'name')}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='lastname'
                                    name='lastname'
                                    type='text'
                                    placeholder='Doe'
                                    labelName='Apellido'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'lastname')}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='birthdate'
                                    name='birthdate'
                                    type='date'
                                    labelName='Fecha de nacimiento'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'birthdate')}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="genre" className='text-blue-light'>Género</label>
                                <select className="block appearance-none w-full bg-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="genre">
                                  <option>Otro</option>
                                  <option>Mujer</option>
                                  <option>Hombre</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.btnContainer}>
                            <SubmitButton type='submit' buttonName={"Enviar"}/>
                        </div>
                    </form>
            </div>
        </div>
    );

}

export default Register;