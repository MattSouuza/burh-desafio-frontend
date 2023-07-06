import { FocusEvent, forwardRef } from "react";

import useForwardRef from "../../hooks/use-foward-ref";

import "./style.scss";

type TextAreaProps = {
    label: string,
    required?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, required = true }, ref) => {

    const textAreaRef = useForwardRef<HTMLTextAreaElement>(ref);

    const handleTextArea = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.value = e.target.value;        
        }
    }

    return (
        <section className="textarea-wrapper">
            <label className="textarea-wrapper__label" htmlFor={label}>{label}</label>
            <textarea className="textarea-wrapper__field" placeholder={label} required={required} name={label} ref={textAreaRef} onBlur={(e) => handleTextArea(e)} />
        </section>
    );
})

export default TextArea;