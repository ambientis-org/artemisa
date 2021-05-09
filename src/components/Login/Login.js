import React from 'react';
import SubmitButton  from '../FormComponents/SubmitButton/SubmitButton';
import Input from '../FormComponents/Input/Input';
import Instance from "../Services/Services";

const Login = () => {

    const submit = (e) => {
        e.preventDefault();

        let username = e.target.elements.username?.value;
        let password = e.target.elements.password?.value;
        let payload = { username, password };

        Instance.post('/login', payload)
            .then((response) => {
                let token = response.body.token;
            })
            .catch((response) => {
                    console.log('Hefesto is not reachable');
                    console.log(response.body)
                }
            );
    };

    const classes = {
        pageBody: 'h-screen flex bg-gray place-items-center',
        formContainer:
            'w-full max-w-md m-auto bg-white rounded-lg shadow-lg py-10 px-16 text-left',
        formHeading: 'text-2xl font-medium text-primary mt-4 mb-12',
        btnContainer: 'flex justify-center items-center mt-6',
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
                            id='username'
                            label='Email'
                            type='text'
                            placeholder='janedoe'
                            labelName='Usuario'
                        />
                        <Input
                            id='password'
                            label='Password'
                            type='password'
                            placeholder='************'
                            labelName='Contraseña'
                        />

                        <div className={classes.btnContainer}>
                            <SubmitButton type='submit' buttonName={"Iniciar sesión"}/>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Login;
