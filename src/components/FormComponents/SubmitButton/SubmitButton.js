import React from 'react';

const SubmitButton = (props) => {
    return (
        <button
                className={`bg-blue py-2 px-4 text-sm text-white rounded focus:outline-none focus:border-blue-dark`}
                type="submit"
        >
            {props.buttonName}
        </button>
    );
}

export default SubmitButton;