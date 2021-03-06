import React from 'react';

const DropdownIcon = (props) => {
    return (
        <button
            className="outline-none focus:outline-none px-3 py-8 rounded-sm flex items-center"
        >
            <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
                transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
            </svg>
        </button>
    );
}

export default DropdownIcon;
