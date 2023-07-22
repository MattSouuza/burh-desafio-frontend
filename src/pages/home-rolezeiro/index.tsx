import { useEffect, useState } from "react";

import useGetEvents from "../../hooks/use-get-events";

import EventProps from "../../types/event-props";

import EventCard from "../../components/event-card";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/error-message";

import "./style.scss";

const HomeRolezeiro = () => {

    const [events, setEvents] = useState<Array<EventProps>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    const getEvents = useGetEvents({ setError, setEvents, setLoading });

    useEffect(() => {
        getEvents();
    }, [])

    return (
        <main className="home-rolezeiro">
            {/* <header className="home-rolezeiro__header">
                <span className="header__go-back">Voltar</span>
                <p className="header__go-anounce">Quero anunciar!</p>
            </header> */}

            <section className="home-rolezeiro__content">

                {
                    loading ?
                        <Loading />
                        :
                        <section className="content__title">
                            {
                                error ?
                                    <ErrorMessage text={error} currentPage="rolezeiro" />
                                    :
                                    events?.length > 0 ?
                                        <>
                                            <h1>Eventos do Momento!</h1>
                                            <p>saia do tédio agora ou ajude outros a sairem! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </>
                                        :
                                        <>
                                            <ErrorMessage text="Ainda não há nenhum evento rolando" currentPage="rolezeiro" />
                                        </>
                            }
                        </section>
                }

                <section className="content__events">
                    {events?.map((event: EventProps) => <EventCard id={event.id} name={event.name} date={event.date} expectedPublic={event.expectedPublic} description={event.description} subscribed={event.subscribed} currentHomePageType="rolezeiro" />)}
                </section>
            </section>
        </main>
    );
}

export default HomeRolezeiro;