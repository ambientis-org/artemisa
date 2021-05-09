import React from "react";

const Input = (props) => {
    return (
        <div>
                <label className='text-blue-light' htmlFor={props.id}>{props.labelName}</label>
                <input
                    type={props.type}
                    className={`w-full p-2 text-primary border-light-blue rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id={props.id}
                    placeholder={props.placeholder}
                    name={props.name}
                />
        </div>
    );
}

export default Input;