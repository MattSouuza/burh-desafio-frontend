import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import "./style.scss";

type HeaderProps = {
    currentPage: "anunciante" | "rolezeiro"
}

const Header = ({ currentPage }: HeaderProps) => {

    const navigate = useNavigate();

    const navigateToOptions = {
        url: `/${currentPage === "anunciante" ? "rolezeiro" : "anunciante"}`,
        linkTitle: currentPage === "anunciante" ? "Quero Curtir!" : "Quero Anunciar!"
    }

    return (
        <>
            <header className={`header header--${currentPage}`}>
                <span className="header__go-back" onClick={() => navigate(-1)}>Voltar</span>
                <p className="header__navigate_option" onClick={() => navigate(navigateToOptions.url)}>{navigateToOptions.linkTitle}</p>
            </header>
            <Outlet/>
        </>
    );
}

export default Header;