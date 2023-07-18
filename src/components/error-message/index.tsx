import "./style.scss";

type ErrorMessageProps = {
    text: string,
    currentPage: "rolezeiro" | "anunciante"
}

const ErrorMessage = ({ text, currentPage }: ErrorMessageProps) => {
    return (
        <section>
            <span className={`error-icon --error-icon-${currentPage}`}>:/</span>
            {<h1 className="error-text">{text}</h1>}
        </section>
    );
}

export default ErrorMessage;