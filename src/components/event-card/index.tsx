import { useNavigate } from "react-router-dom";

import EventProps from "../../types/event-props";

import Button from "../button";

import "./style.scss";
import { useState } from "react";
import useAxios from "../../hooks/use-axios";

const eventImgs = [
    "src/assets/generic-events/event-1.jpg",
    "src/assets/generic-events/event-2.jpg",
    "src/assets/generic-events/event-3.jpg",
    "src/assets/generic-events/event-4.jpg",
    "src/assets/generic-events/event-5.jpeg",
    "src/assets/generic-events/event-6.jpg",
    "src/assets/generic-events/event-7.png",
    "src/assets/generic-events/event-8.png",
    "src/assets/generic-events/event-9.jpg",
    "src/assets/generic-events/event-10.jpg",
]

function getRandomImg(imgs: Array<string>) {
    return imgs[Math.floor((Math.random() * imgs.length))];
}

interface EventCardProps extends EventProps {
    currentHomePageType: "rolezeiro" | "anunciante"
}

const EventCard = ({ id, name, date, description, subscribed, expectedPublic, currentHomePageType }: EventCardProps) => {

    const { sendRequest } = useAxios();

    const navigate = useNavigate();

    const formatDate = (date: Date) => {
        const yyyy = date.getFullYear();
        let mm = (date.getMonth() + 1).toString();
        let dd = date.getDate().toString();

        if (Number(dd) < 10) dd = '0' + dd;
        if (Number(mm) < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | object | null>(null);
    const [sub, setSub] = useState<boolean>(subscribed);

    const handleConfirm = async () => {
        setLoading(true);

        console.log(sub);
        
        const requestBody = {
            name,
            date,
            expectedPublic,
            description,
            subscribed: !sub
        }

        console.log(requestBody);

        const { data, error } = await sendRequest({
            url: `${import.meta.env.VITE_CRUDCRUD_URL}/events/${id}`,
            method: "put",
            payload: requestBody,
        });

        if (error) {
            setError("Não foi possível se inscrever no evento...");
            console.log("O erro que ocorreu:", error);

            setLoading(false);
            return;
        }

        setTimeout(() => {
            setSub(!sub);
            setLoading(false);
        }, 3000)

        console.log("data", data);
    }

    const buttonAction = {
        title: currentHomePageType === "anunciante" ? "Editar Evento" : !sub ? "Corfirmar Presença" : sub ? "Cancelar Presença" : "Erro",
        action: currentHomePageType === "anunciante" ? () => navigate(`update-event/${id}`, { state: { id, name, date, description, expectedPublic } }) : () => handleConfirm()
    }

    return (
        <div className="event-card">
            <figure className="event-card__img-wrapper">
                <img src={getRandomImg(eventImgs)} />
            </figure>
            <section className="event-card__content">
                <section className="content_main-info">
                    <h2>{name}</h2>
                    <h3>Estreia: {formatDate(new Date(date))}</h3>
                </section>
                <p>Público Esperado: {expectedPublic}</p>
                <p>{description ?? "Não há descrição"}</p>
                <Button text={loading ? "Carregando.." : buttonAction.title} type="button-primary" primaryType={currentHomePageType === "rolezeiro" ? "--rolezeiro" : "--anunciante"} handleClick={() => buttonAction.action()} />
            </section>
        </div>
    );
}

export default EventCard;