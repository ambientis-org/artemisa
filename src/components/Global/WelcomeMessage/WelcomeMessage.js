import React, { useEffect, useState } from "react";
import Instance from "../../Api/Services/Services";


const WelcomeMessage = (props) => {

    const [state, setState] = useState(
        {
            name: '',
        }
    );

    const classes = {
        textMessage: 'text-blue-light text-lg',
        dateMessage: 'text-xs text-grey-light',
        messageContainer: 'flex flex-col justify-start text-left'
    }

    useEffect(() => {
        let username = localStorage.getItem('mentiaUsername');
        let authToken = localStorage.getItem('mentiaAuthToken');
        const headers = {'Authorization': authToken};
        Instance.get(`/users/${username}`, {headers: headers})
            .then((response) => {
                setState({name: response.data?.name});
            });
    }, []);

    const getDate = () => {
        let date = new Date();
        let days = {
            0: 'Domingo', 
            1: 'Lunes', 
            2: 'Martes', 
            3: 'Miércoles', 
            4: 'Jueves',
            5: 'Viernes',
            6: 'Sábado',
        }
        return `${days[date.getDay()]}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    return (
        <div className={classes.messageContainer}>
            <span className={classes.textMessage}>
                Hola, {state.name}
            </span>
            <span className={classes.dateMessage}>{getDate()} 🌤</span>
        </div>
    );
}

export default WelcomeMessage;
