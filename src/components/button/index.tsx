import "./style.scss"

type ButtonProps = {
    type?: "button-primary" | "button-secondary";
    primaryType?: "--rolezeiro" | "--anunciante",
    text: string,
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button({ type = "button-primary", primaryType = "--rolezeiro", text, handleClick }: ButtonProps) {
    return (
        <>
            <button 
            className={`button ${type} ${type.includes("primary") ? primaryType : ""}`}
            onClick={handleClick}
            >{text}</button>
        </>
    );
}

export default Button;