import React from 'react';
import '../../../App.css';
import DropdownIcon from '../DropdownIcon/DropdownIcon';

const HeaderMenu = (props) => {
    return (
        <div className="group">
            <DropdownIcon/>
            <ul className="shadow-lg rounded transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left">Diario</li>
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left">Perfil</li>
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left">Blog</li>
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left">Salir</li>
            </ul>
        </div>
    );
}

export default HeaderMenu;