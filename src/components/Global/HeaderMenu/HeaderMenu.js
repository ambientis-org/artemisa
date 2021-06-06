import React from 'react';
import '../../../App.css';
import DropdownIcon from '../DropdownIcon/DropdownIcon';

const HeaderMenu = (props) => {

    const onClickClose = () => {
        localStorage.removeItem('mentiaAuthToken');
        localStorage.removeItem('mentiaUsername');
        window.location.href = '/';
    }

    const onClickJournal = () => {
        window.location.href = '/posts/new';
    }

    return (
        <div className="group">
            <DropdownIcon/>
            <ul className="shadow-lg rounded transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left cursor-pointer" onClick={onClickJournal}>Diario</li>
                <li className="rounded-md px-7 py-3 hover:bg-gray-light text-blue-light text-left">Perfil</li>
                <li className="rounded-md cursor-pointer px-7 py-3 hover:bg-gray-light text-blue-light text-left" onClick={onClickClose}>Salir</li>
            </ul>
        </div>
    );
}

export default HeaderMenu;