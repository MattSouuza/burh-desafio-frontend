import Button from "../../components/button";
import EventCard from "../../components/event-card";

import "./style.scss";

const HomeAnunciante = () => {
    return (
        <main className="home-anunciante">
            <header className="home-anunciante__header">
                <span className="header__go-back">Voltar</span>
                <p className="header__go-enjoy">Quero curtir!</p>
            </header>

            <section className="home-anunciante__content">

                <section className="content__title">
                    <header className="title__text">
                        <h1>Seus Eventos!</h1>
                        <p>saia do tédio agora ou ajude outros a sairem! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </header>

                    <section className="title__button-wrapper">
                        <Button text="Anunciar Evento +" type="button-primary" primaryType="--anunciante" handleClick={() => { }} />
                    </section>
                </section>

                <section className="content__events">

                </section>
            </section>
        </main>
    );
}

export default HomeAnunciante;