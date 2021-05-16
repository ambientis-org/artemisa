import React from "react";

const Input = (props) => {
    return (
        <div className={ props.margin }>
                <label className='text-blue-light' htmlFor={props.id}>{props.labelName}</label>
                <input
                    type={props.type}
                    className={`w-full p-2 text-primary border-light-blue rounded-md outline-none text-sm transition duration-150 ease-in-out ${props.className}`}
                    id={props.id}
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={props.onChange}
                />
                <span className="text-sm text-red transition duration-150 ease-in-out">{ props.errors[props.name] }</span>
        </div>
    );
}

export default Input;