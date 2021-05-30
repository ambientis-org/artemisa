import React from 'react';

import DoctorCard from './components/DoctorCard';
import Header from '../../Global/Header/Header';
import HeroSection from '../../Global/HeroSection/HeroSection';
import HeatJournal from './components/HeatJournal';


const Home = (props) => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <HeatJournal/>
            <DoctorCard/>
        </div>
    );
}

export default Home;