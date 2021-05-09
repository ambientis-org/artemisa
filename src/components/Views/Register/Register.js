import React from 'react';

import Input from '../../FormComponents/Input/Input';
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import Instance from "../../Api/Services/Services";


const Register = (props) => {

    const submit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        let username =  e.target.elements.username?.value;
        let name =  e.target.elements.name?.value;
        let lastname =  e.target.elements.lastname?.value;
        let birthdate =  e.target.elements.birthdate?.value;
        let genre =  e.target.elements.genre?.value;

        let payload = {
            email,
            password,
            username,
            name,
            lastname,
            birthdate,
            genre
        }

        Instance('/register', payload)
            .then((response) => {
                Instance('/login')
                    .then(
                        (loginResponse) => {
                            let token = loginResponse.body.token;
                        })
                    .catch((response) => {
                            console.log('Hefesto is not reachable');
                            console.log(response.body)
                        });
            })
            .catch((response) => {
                    console.log('Hefesto is not reachable');
                    console.log(response.body)
            });
    }

    const classes = {
        pageBody: 'h-screen flex bg-gray place-items-center',
        formContainer:
            'w-full max-w-lg m-auto bg-white rounded-lg shadow-lg py-10 px-16 text-left',
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
                                    type='email'
                                    placeholder='me@example.com'
                                    labelName='Correo electrónico'
                                    className='py-3 px-4 mb-3  w-full'
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='username'
                                    type='text'
                                    placeholder='janedoe'
                                    labelName='Nombre de usuario'
                                    className='py-3 px-4 w-full'
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='password'
                                    type='password'
                                    placeholder='************'
                                    labelName='Contraseña'
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='password'
                                    type='password'
                                    placeholder='************'
                                    labelName='Confirmar contraseña'
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='name'
                                    type='text'
                                    placeholder='Jane'
                                    labelName='Nombre(s)'
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='lastname'
                                    type='text'
                                    placeholder='Doe'
                                    labelName='Apellido'
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Input
                                    id='birthdate'
                                    type='date'
                                    labelName='Fecha de nacimiento'
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