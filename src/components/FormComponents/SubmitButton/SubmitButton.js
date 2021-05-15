import React from 'react';

const SubmitButton = (props) => {
    return (
        <button
                className={`bg-blue py-2 px-4 text-sm text-white rounded focus:outline-none hover:bg-blue-light focus:bg-blue-light hover:border-blue-light focus:border-blue-light`}
                type="submit"
        >
            {props.buttonName}
        </button>
    );
}

export default SubmitButton;