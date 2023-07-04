import React, { useImperativeHandle, useRef } from "react";

import "./style.scss";

type TextAreaProps = {
    name: string,
    required: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ name, required = true }, ref) => {
    return (
        <section className="textarea-wrapper">
            <label className="textarea-wrapper__label" htmlFor={name}>{name}</label>
            <textarea className="textarea-wrapper__field" placeholder={name} required={required} name={name} ref={ref} />
        </section>
    );
})

export default TextArea;