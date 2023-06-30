import EventCard from "../../components/event-card";
import "./style.scss";

const HomeRolezeiro = () => {
    return (
        <main className="home-rolezeiro">
            <header className="home-rolezeiro__header">
                <span className="header__go-back">Voltar</span>
                <p className="header__go-anounce">Quero anunciar!</p>
            </header>

            <section className="home-rolezeiro__content">

                <section className="content__title">
                    <h1>Eventos do Momento!</h1>
                    <p>saia do tédio agora ou ajude outros a sairem! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>

                <section className="content__events">
                    <EventCard name="Anime Friends" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                    <EventCard name="Bailão" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                    <EventCard name="Show da Gloria" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                    <EventCard name="Anime Friends" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                    <EventCard name="Bailão" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                    <EventCard name="Show da Gloria" date={new Date()} confirmedUsers={["id"]} currentHomePageType="rolezeiro" />
                </section>
            </section>
        </main>
    );
}

export default HomeRolezeiro;