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

interface EventCardProps {
    name: string,
    date: Date,
    description?: string,
    confirmedUsers: Array<string>,
    currentHomePageType: string
}

const EventCard = ({ name, date, description, confirmedUsers, currentHomePageType }: EventCardProps) => {
    return (
        <div className="event-card">
            <figure className="event-card__img-wrapper">
                <img src={getRandomImg(eventImgs)} />
            </figure>
            <section className="event-card__content">
                <section className="content_main-info">
                    <h2>{name}</h2>
                    <h3>{date.toUTCString()}</h3>
                </section>
                <p>{description ?? "Não há descrição"}</p>
                <Button text="Corfirmar Presença" type="button-primary" primaryType={currentHomePageType === "rolezeiro" ? "--rolezeiro" : "--anunciante"} handleClick={() => { }} />
            </section>
        </div>
    );
}

export default EventCard;