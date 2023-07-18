import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGetEvents from "../../hooks/use-get-events";
import EventProps from "../../types/event-props";

import Button from "../../components/button";
import EventCard from "../../components/event-card";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/error-message";

import "./style.scss";


const HomeAnunciante = () => {

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }

    const [events, setEvents] = useState<Array<EventProps>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    const getEvents = useGetEvents({ setError, setEvents, setLoading });

    useEffect(() => {
        getEvents();
    }, [])

    return (
        <main className="home-anunciante">
            {/* <header className="home-anunciante__header">
                <span className="header__go-back">Voltar</span>
                <p className="header__go-enjoy">Quero curtir!</p>
            </header> */}

            {
                loading ?
                    <Loading />
                    :
                    <section className="home-anunciante__content">
                        <section className={`content__title ${!events?.length ? "content__title--no-events" : ""}`}>
                            <header className="title__text">
                                {
                                    error ?
                                        <ErrorMessage text={error} currentPage="anunciante"/>
                                        :
                                        events?.length > 0 ?
                                            <>
                                                <h1>Seus Eventos!</h1>
                                                <p>ajude outros a sairem do tédio! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </>
                                            :
                                            <>
                                                <ErrorMessage text="Você ainda não criou nenhum evento!" currentPage="anunciante"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </>
                                }
                            </header>
                            <section className="title__button-wrapper">
                                <Button text="Anunciar Evento +" type="button-primary" primaryType="--anunciante" handleClick={() => navigateTo("/anunciante/register-event")} />
                            </section>
                        </section>

                        <section className="content__events">
                            {events?.map((event: EventProps) => <EventCard id={event.id} name={event.name} date={event.date} description={event.description} subscribed={event.subscribed} currentHomePageType="anunciante" />)}
                        </section>
                    </section>
            }


        </main>
    );
}

export default HomeAnunciante;