import React, { useState } from 'react';

import Input from '../../FormComponents/Input/Input';
import SubmitButton from "../../FormComponents/SubmitButton/SubmitButton";
import Instance from "../../Api/Services/Services";


const DoctorRegister = (props) => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let phone = e.target.elements.phone?.value;
        let name = e.target.elements.name?.value;
        let lastname = e.target.elements.lastname?.value;
        let doctor_id = parseInt(e.target.elements.doctorid?.value);

        if (handleValidation()) {
            let payload = {
                email,
                phone,
                name,
                lastname,
                id: doctor_id
            }
            Instance.post('/doctor', payload)
                .then(() => {
                    props.history.push('/');
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

        if (!fields['name']) {
            err['name'] = "Parece que el nombre está vacío."
        }

        if (!fields['lastname']) {
            err['lastname'] = "Parece que el apellido está vacío."
        }

        if (!fields['phone']) {
            err['phone'] = "Parece que tu telefono está vacío."
        }

        if (!fields['doctorid']) {
            err['doctorid'] = "Parece que el ID está vacío"
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
                    Registro de terapeuta - Solo para Desarrollo
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
                                    id='phone'
                                    name='phone'
                                    type='text'
                                    placeholder='5511223344'
                                    labelName='Teléfono'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'phone')}
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
                                    id='doctorid'
                                    name='doctorid'
                                    type='text'
                                    placeholder='12345678'
                                    labelName='Clave de Doctor'
                                    errors={errors}
                                    onChange={handleChange.bind(this, 'doctorid')}
                                />
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

export default DoctorRegister;