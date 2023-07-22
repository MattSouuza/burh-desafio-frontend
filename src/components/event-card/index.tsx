import { useNavigate } from "react-router-dom";

import EventProps from "../../types/event-props";

import Button from "../button";

import "./style.scss";

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

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }

    const handleConfirm = () => {

    }

    const buttonAction = {
        title: currentHomePageType === "anunciante" ? "Editar Evento" : !subscribed ? "Corfirmar Presença" : subscribed ? "Cancelar Presença" : "Erro",
        action: currentHomePageType === "anunciante" ? navigateTo : handleConfirm
    }

    return (
        <div className="event-card">
            <figure className="event-card__img-wrapper">
                <img src={getRandomImg(eventImgs)} />
            </figure>
            <section className="event-card__content">
                <section className="content_main-info">
                    <h2>{name}</h2>
                    <h3>{new Date(date).toUTCString()}</h3>
                    <h4>{expectedPublic}</h4>
                </section>
                <p>{description ?? "Não há descrição"}</p>
                <Button text={buttonAction.title} type="button-primary" primaryType={currentHomePageType === "rolezeiro" ? "--rolezeiro" : "--anunciante"} handleClick={() => { }} />
            </section>
        </div>
    );
}

export default EventCard;