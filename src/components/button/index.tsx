import React from "react";
import "./style.scss"

enum TYPE {
    Primary = "button-primary",
    Secondary = "button-secondary"
}

enum PRIMARY_TYPE {
    Rolezeiro = "--rolezeiro",
    Anunciante = "--anunciante"
}

interface ButtonProps {
    type: string;
    primaryType?: string,
    text: string,
    handleClick: Function
}

function Button({ type = "button_primary", primaryType = "--rolezeiro", text, handleClick }: ButtonProps) {

    return (
        <>
            <button 
            className={`button ${type} ${primaryType ?? ""}`}
            onClick={() => handleClick()}
            >{text}</button>
        </>
    );
}

export default Button;