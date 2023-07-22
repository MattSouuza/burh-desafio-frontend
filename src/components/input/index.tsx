import React, { HTMLInputTypeAttribute } from "react";

import useForwardRef from "../../hooks/use-foward-ref";

import "./style.scss";

type InputProps = {
    label: string,
    type?: HTMLInputTypeAttribute,
    required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", required = true }: InputProps, ref) => {

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (inputRef?.current) {
            inputRef.current.value = e.target.value;
        }
    }

    const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = e.target.value.replace(/\D/g , "");

        console.log(Number(numberValue));
        

        if (Number(numberValue) === 0) {
            e.target.value = "";
            
            return;
        }

        inputRef.current.value = numberValue;
    }

    const typeIsNumber = type === "number" ? true : false;

    return (
        <section className="input-wrapper">
            <label className="input-wrapper__label" htmlFor={label}>{label}</label>
            <input
                className="input-wrapper__field"
                type={typeIsNumber ? "text" : type}
                placeholder={label} required={required}
                ref={inputRef}
                maxLength={typeIsNumber ? 7 : 80}
                onBlur={(e) => handleInput(e)}
                onChange={(e) => typeIsNumber ? handleNumberInput(e) : null}
            />
        </section>
    );
})

export default Input;