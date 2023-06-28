import EventCard from "../../components/event-card";
import "./style.scss";

const HomeRolezeiro = () => {
    return (
        <main className="home-rolezeiro">
            <header className="home-rolezeiro__header">
                <span className="header__go-back">Voltar</span>
                <h3 className="header__go-anounce">Quero anunciar!</h3>
            </header>

            <section className="home-rolezeiro__events">
                <h1>Eventos do Momento!</h1>

                <EventCard name="Anime Friends" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro"/>
            </section>
        </main>
    );
}

export default HomeRolezeiro;