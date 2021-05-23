import React from 'react';

const HeroMenu = (props) => {
    return (
        <div class="inline-block relative w-64">
            <select class="lg:ml-10 md:mt-20 sm:mt-20 text-center lg:mt-0 block appearance-none px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline text-blue-light lg:text-3xl text-xl">
                <option className="text-2xl">Excelente</option>
                <option className="text-2xl">Bien</option>
                <option className="text-2xl">Podría estar mejor</option>
                <option className="text-2xl">No sé decir</option>
                <option className="text-2xl">Mal</option>
                <option className="text-2xl">Terrible</option>
            </select>
        </div>
    );
}

export default HeroMenu;
