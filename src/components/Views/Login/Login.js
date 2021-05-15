import React, {useState} from 'react';

import SubmitButton from '../../FormComponents/SubmitButton/SubmitButton';
import Input from '../../FormComponents/Input/Input';
import Instance from '../../Api/Services/Services';

const Login = () => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        let payload = { email, password };

        handleValidation();
        Instance.post('/login', payload, {withCredentials: true})
            .then(res => {
                console.log(res);
            }).catch(err => {
                errors["result"] = 'Parece que no te has registrado.'
                setErrors(errors);
            })
    };

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

        setErrors(err);
    }

    const classes = {
        pageBody: 'h-screen sm:h-screen flex bg-gray place-items-center',
        formContainer:
            'w-full max-w-lg m-auto bg-white rounded-lg lg:shadow-lg py-10 px-16 text-left',
        formHeading: 'text-2xl font-medium text-primary mt-4 mb-12',
        btnContainer: 'flex justify-center items-center mt-6 space-x-12',
        headingContainer: 'text-center'
    };

    return (
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                    <div className={classes.headingContainer}>
                        <h1 className={classes.formHeading}>
                            Inicia sesión 🔐
                        </h1>
                    </div>

                    <form onSubmit={submit}>
                        <Input
                            id='email'
                            name='email'
                            label='Email'
                            type='text'
                            margin='mb-12'
                            placeholder='me@example.com'
                            labelName='Correo electrónico'
                            errors={errors}
                            onChange={handleChange.bind(this, 'email')}
                        />
                        <Input
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            margin='mb-4'
                            placeholder='************'
                            labelName='Contraseña'
                            errors={errors}
                            onChange={handleChange.bind(this, 'password')}
                        />

                        <span className={'text-sm text-red mt-4 transition duration-150 ease-in-out'}>{ errors.result }</span>
                        <div className={classes.btnContainer}>
                            <p className={'text-sm text-blue-light hover:text-blue-dark'}>
                                <a href="/register">Regístrate</a>
                            </p>
                            <SubmitButton type='submit' buttonName={"Iniciar sesión"}/>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Login;
