import React from 'react';

import Header from '../../Global/Header/Header';
import HeroSection from '../../Global/HeroSection/HeroSection';
import HeatJournal from './components/HeatJournal';


const Home = (props) => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <HeatJournal/>
        </div>
    );
}

export default Home;