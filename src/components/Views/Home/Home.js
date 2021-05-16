import React, { useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../Api/AuthContext/AuthContext';
import Instance from '../../Api/Services/Services';


const Home = (props) => {
    const [authState, setauthState] = useContext(AuthContext);
    const [state, setState] = useState({});

    useEffect(() => {
        getUserInfo();
    });

    const getUserInfo = () => {
        Instance.get(`/users/${localStorage.getItem('mentiaUsername')}`, {headers: {'Authorization': localStorage.getItem('mentiaAuthToken')}})
            .then((response) => {
                setState({name: response.data.name});
            });
    }

    return (
        <div>
            <h1>Welcome</h1>
            <h3>{state?.name}</h3>
        </div>
    );
}

export default Home;