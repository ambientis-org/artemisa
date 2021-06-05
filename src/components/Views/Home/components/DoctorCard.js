import React from 'react';

const DoctorCard = (props) => {

    const classes = {
        heroContainer: 'mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full w-full lg:py-8 sm:py-6 py-4 grid lg:grid-cols-3 sm:grid-cols-2',
        titleContainer: 'm-20 mb-8 mt-0 text-blue text-xl'
    }

    return (
        <div className={classes.heroContainer}>

            <figure className="md:flex bg-gray-100 rounded-xl py-4 md:p-0 shadow-md lg:shadow-lg rounded-l-lg">
                <img className="md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://picsum.photos/200" alt="" width="200" height="200"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-semibold">
                        {props.name_} {props.lastname}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-blue-light">
                        {props.phone}, {props.email}
                    </div>
                    <div className="text-grey">
                        {props.id_}
                    </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default DoctorCard;