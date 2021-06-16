import React from 'react';

const DoctorCard = (props) => {

    const classes = {
        heroContainer: 'mx-auto max-w-7xl h-full w-full lg:py-8 sm:py-6 px-0 grid lg:grid-cols-3 sm:grid-cols-2',
        titleContainer: 'm-20 mb-8 mt-0 text-blue text-xl'
    }

    return (
        <div className={classes.heroContainer}>

            <figure className="md:flex bg-gray-100 rounded-xl py-4 md:p-0 shadow-md lg:shadow-lg rounded-l-lg md:justify-items-center md:align-middle">
                <img className="md:w-48 md:h-auto rounded-full mx-auto p-5" src="https://picsum.photos/150" alt="" width="150" height="150"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-semibold text-blue-dark">
                        {props.name_} {props.lastname}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-blue-light">
                        <div className="flex flex-col">
                            <p>{props.phone},</p> 
                            <a href={`mailto:${props.email}`} className='underline'>{props.email}</a>
                        </div>
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