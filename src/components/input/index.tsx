import React from "react";

import useForwardRef from "../../hooks/use-foward-ref";

import "./style.scss";

type InputProps = {
    label: string,
    type?: "text" | "date" | "textarea",
    required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", required = true }: InputProps, ref) => {

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {      
        if (inputRef && inputRef.current) {
            inputRef.current.value = e.target.value;   
        }
    }

    return (
        <section className="input-wrapper">
            <label className="input-wrapper__label" htmlFor={label}>{label}</label>
            <input className="input-wrapper__field" type={type} placeholder={label} required={required} ref={inputRef} onBlur={(e) => handleInput(e)} />
        </section>
    );
})

export default Input;