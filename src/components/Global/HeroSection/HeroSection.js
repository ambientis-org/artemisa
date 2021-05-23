import React from 'react';

import HeroMenu from '../HeroMenu/HeroMenu';

const HeroSection = (props) => {
    
    const classes = {
        mainSection: 'mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full w-full',
        heroContainer: 'sm:text-center lg:text-left flex lg:flex-row flex-col items-center',
        heroTitle: 'text-4xl tracking-tight sm:text-5xl md:text-6xl',
    }
    
    const handleChange = (field, e) => {
    }

    return (
        <main className={classes.mainSection}>
        <div className={classes.heroContainer}>
          <h1 className={classes.heroTitle}>
            <span className="block xl:inline text-blue">¿Cómo te has</span>{' '}
            <span className="block xl:inline text-blue-light lg:text-blue">sentido hoy?</span>
          </h1>
          <HeroMenu/>
        </div>
      </main>
    );
}

export default HeroSection;