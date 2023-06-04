import pablloImg from "../../assets/pabllo.png"
import leoImg from "../../assets/leo-santana.jpg"
import avrilImg from "../../assets/avril.jpg"

import Button from "../../components/button";
import Carousel from "../../components/carousel";

import "./style.scss"

function Startup() {


    return (
        <body className="startup">
            <h1 className="startup__title">Eventos acontecendo agora!</h1>

            <Carousel images={[leoImg, pablloImg, avrilImg]} />

            <section className="startup__welcome-section">
                <article className="welcome-section__text">
                    <h1>Bem-vindo(a) à RolêTop,</h1>
                    <p>saia do tédio agora ou ajude outros a sairem! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>
                <section className="welcome-section__buttons">
                    <Button type="button-primary" text="Quero curtir!" handleClick={() => {}} />
                    <Button type="button-secondary" text="Quero anunciar!" handleClick={() => {}} />
                </section>
            </section>


        </body>
    );
}

export default Startup;