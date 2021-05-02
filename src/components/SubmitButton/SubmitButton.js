import React from 'react';

const SubmitButton = (props) => {
    return (
        <button
                className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                type="submit"
        >
            {props.buttonName}
        </button>
    );
}

export default SubmitButton;