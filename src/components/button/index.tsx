import "./style.scss"

type ButtonProps = {
    type: "button-primary" | "button-secondary";
    primaryType?: "--rolezeiro" | "--anunciante",
    text: string,
    handleClick: Function // todo: substituir type Function pois é problemático e não recomendado
}

function Button({ type = "button-primary", primaryType, text, handleClick }: ButtonProps) {
    return (
        <>
            <button 
            className={`button ${type} ${type.includes("primary") ? primaryType : ""}`}
            onClick={() => handleClick()}
            type="button"
            >{text}</button>
        </>
    );
}

export default Button;