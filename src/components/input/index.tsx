import React, { useImperativeHandle, useRef } from "react";

import "./style.scss";

type InputProps = {
    name: string,
    type?: "text" | "date" | "textarea",
    required?: boolean
}

const Input = ({ name, type = "text", required = true }: InputProps) => {
    // const Input = React.forwardRef(({ name, type = "text", required = true }: InputProps, ref) => {

    // const inputElement = useRef<HTMLInputElement | null>(null);
    // const textareaElement = useRef<HTMLTextAreaElement | null>(null);

    // useImperativeHandle(ref, () => {
    //     return {
    //         value: inputElement.current ? inputElement.current.value : "",
    //         setValue: (value: string) => {
    //             inputElement.current && (inputElement.current.value = value);
    //         },
    //     };
    // });

    return (
        <section className="input-wrapper">
            <label className="input-wrapper__label" htmlFor={name}>{name}</label>
            {type === "textarea" ?
                <textarea className="input-wrapper__field--textarea" placeholder={name} required={required} name={name} /> :
                <input className="input-wrapper__field" type={type} placeholder={name} required={required} />}
        </section>
    );
}

export default Input;