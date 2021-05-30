import React from 'react';

const DoctorCard = (props) => {

    const classes = {
        heroContainer: 'mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full lg:py-8 sm:py-6 py-4 grid grid-cols-3',
    }

    return (
        <div className={classes.heroContainer}>
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg rounded-l-lg">
                <img className="w-32 h-32 md:w-48 md:h-auto  md:rounded-none rounded-full mx-auto" src="https://picsum.photos/384" alt="" width="384" height="512"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-semibold">
                        Sample Doctor Name
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-blue-light">
                        (+52) 5534066784, sample@doctor.com
                    </div>
                    <div className="text-grey">
                        Cedula
                    </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default DoctorCard;