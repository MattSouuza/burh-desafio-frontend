import React, { useImperativeHandle, useRef } from "react";

import "./style.scss";

type InputProps = {
    name: string,
    type?: "text" | "date" | "textarea",
    required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, type = "text", required = true }: InputProps, ref) => {
    return (
        <section className="input-wrapper">
            <label className="input-wrapper__label" htmlFor={name}>{name}</label>
            <input className="input-wrapper__field" type={type} placeholder={name} required={required} ref={ref} />
        </section>
    );
})

export default Input;