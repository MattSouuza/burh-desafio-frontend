import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "../../hooks/use-axios";

import Button from "../../components/button";
import EventCard from "../../components/event-card";
import Loading from "../../components/loading";

import "./style.scss";

type EventProps = {
    id: string,
    name: string,
    date: Date,
    description?: string
}

const HomeAnunciante = () => {

    const { sendRequest } = useAxios();

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }

    const [events, setEvents] = useState<Array<EventProps>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const handleGetEvents = async () => {
        setLoading(true);

        const { data, error } = await sendRequest({
            url: `${import.meta.env.VITE_CRUDCRUD_URL}/events`,
            method: "get",
            headers: { accept: 'application/json' }
        })

        if (error) {
            setError("Não foi possível obter os eventos...");
            console.log("O erro que ocorreu:", error);

            setLoading(false);

            return;
        }

        setEvents(data);

        setLoading(false);

        console.log("data", data);
    }

    useEffect(() => {
        handleGetEvents();
    }, [])

    const noEventsLayout =
        <section>

        </section>;

    return (
        <main className="home-anunciante">
            {/* <header className="home-anunciante__header">
                <span className="header__go-back">Voltar</span>
                <p className="header__go-enjoy">Quero curtir!</p>
            </header> */}

            {loading ? <Loading /> : null}
            {error ? <h1>{error}</h1> : null}

            <section className="home-anunciante__content">
                <section className={`content__title ${!events?.length ? "content__title--no-events" : ""}`}>
                    <header className="title__text">
                        {
                            events?.length > 0 ?
                                <>
                                    <h1>Seus Eventos!</h1>
                                    <p>ajude outros a sairem do tédio! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </>
                                :
                                <>
                                    <span className="text__no-events-icon">:/</span>
                                    <h1>Você ainda não criou nenhum evento!</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </>
                        }
                    </header>
                    <section className="title__button-wrapper">
                        <Button text="Anunciar Evento +" type="button-primary" primaryType="--anunciante" handleClick={() => navigateTo("/anunciante/register-event")} />
                    </section>
                </section>

                <section className="content__events">
                    {events?.map((event: EventProps) => <EventCard id={event.id} name={event.name} date={event.date} description={event.description} currentHomePageType="anunciante" />)}
                </section>
            </section>
        </main>
    );
}

export default HomeAnunciante;