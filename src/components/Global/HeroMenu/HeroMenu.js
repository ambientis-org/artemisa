import React, { useState } from 'react';
import Instance from '../../Api/Services/Services';

import Swal from 'sweetalert2';

const HeroMenu = (props) => {

    const [mood, setMood] = useState({
        value: null
    });

    const [state, setState] = useState({
        value: false
    });

    const handleMoodChange = (event) => {
        setMood({value: parseInt(event.target.value)});
    } 

    const handleChange = (event) => {
        handleMoodChange(event);
        const headers = {
            Authorization: localStorage.getItem('mentiaAuthToken')
        }
        Instance.post(`/mood/${localStorage.getItem('mentiaUsername')}/add`, {value: mood.value}, {headers})
            .then(response => {
                // POST EXITOSO
                setState({value: true})
                console.log('Has cambiado tu mood exitósamente');
            })
            .catch(response => {
                // POST ERRONEO
                console.log('Algo salió mal al registrar tu mood');
            });
    }

    const onClick = (props) => {
        if (state.value) {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Ya registraste un mood para hoy.',
            });
        }
    }


    return (
        <div className="inline-block relative w-64" onClick={onClick}>
            <select disabled={state.value} onChange={event => handleChange(event)} className="lg:ml-10 md:mt-20 sm:mt-20 text-center lg:mt-0 appearance-none px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline text-blue-light lg:text-3xl text-xl">
                <option className="text-2xl" value={5}>Excelente</option>
                <option className="text-2xl" value={4}>Bien</option>
                <option className="text-2xl" value={3}>Podría estar mejor</option>
                <option className="text-2xl" value={2}>No sé decir</option>
                <option className="text-2xl" value={1}>Mal</option>
                <option className="text-2xl" value={0}>Terrible</option>
            </select>
        </div>
    );
}

export default HeroMenu;
