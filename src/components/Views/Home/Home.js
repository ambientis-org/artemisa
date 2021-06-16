import React, {useState, useEffect} from 'react';

import DoctorCard from './components/DoctorCard';
import Header from '../../Global/Header/Header';
import HeroSection from '../../Global/HeroSection/HeroSection';
import HeatJournal from './components/HeatJournal';
import Instance from '../../Api/Services/Services';


const Home = (props) => {

    const [state, setState] = useState({});

    useEffect(() => {
        const headers = {Authorization: localStorage.getItem('mentiaAuthToken')};
        Instance.get(`/users/${localStorage.getItem('mentiaUsername')}`, {headers: headers})
            .then((response) => {
                const doctorID = response.data.doctor_id;
                Instance.get(`/doctor?doctor_id=${doctorID}`)
                    .then((response) => {
                        setState({
                            name: response.data.name,
                            lastname: response.data.lastname,
                            email: response.data.email,
                            phone: response.data.phone,
                            id_: doctorID,
                        });
                    });
            })

    }, []);

    const classes = {
        titleContainer: 'm-20 mb-8 text-blue text-xl'
    }

    return (
        <div>
            <Header/>
            <HeroSection/>
            <HeatJournal/>
            <div className={classes.titleContainer}>
                <h1>Tus Terapeutas</h1>
            </div>
            <DoctorCard
                name_={state.name}
                lastname={state.lastname}
                email={state.email}
                phone={state.phone}
                id_={state.id_}
            />
        </div>
    );
}

export default Home;