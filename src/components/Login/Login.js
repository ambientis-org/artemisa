import React from 'react';
import Input from '../Input/Input';
import SubmitButton from "../SubmitButton/SubmitButton";

const Login = (props) => {

    const submit = (e) => {
        e.preventDefault();

        let username = e.target.elements.username?.value;
        let password = e.target.elements.password?.value;

        const payload = {
            "username": username,
            "password": password
        }

        // POST to hefesto/login
    }

    return (
        <div className='h-screen flex bg-gray-bg1'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                            Inicia sesión 🔐
                        </h1>

                        <form onSubmit={submit}>
                            <Input
                                labelName="Usuario"
                                placeholder="johndoe"
                                id="username"
                                type="text"
                            />
                            <Input
                                labelName="Contraseña"
                                placeholder="**********"
                                id="password"
                                type="password"
                            />

                            <div className='flex justify-center items-center mt-6'>
                                <SubmitButton buttonName="Iniciar sesión"/>
                            </div>
                        </form>
                </div>
        </div>
    );
}

export default Login;