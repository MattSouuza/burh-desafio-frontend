import Button from "../../components/button";
import Carousel from "../../components/carousel";

import pablloImg from "../../assets/pabllo.png";
import leoImg from "../../assets/leo-santana.jpg";
import avrilImg from "../../assets/avril.jpg";
import roleTopLogo from "../../assets/prototipo-logo.png";

import "./style.scss"

function Startup() {

    return (
        <body className="startup">
            <div className="startup__initial">
                <h1 className="initial__title">Eventos acontecendo agora!</h1>

                <section className="initial__carousel-wrapper">
                    <Carousel images={[leoImg, pablloImg, avrilImg]} />
                </section>
            </div>

            <section className="startup__welcome-section">
                <div className="welcome-section__wrapper">
                    <figure className="wrapper__logo">
                        <img src={roleTopLogo} />
                    </figure>
                    <article className="wrapper__text">
                        <h1>Bem-vindo(a) à RolêTop,</h1>
                        <p>saia do tédio agora ou ajude outros a sairem! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <section className="wrapper__buttons">
                        <Button type="button-primary" text="Quero curtir!" handleClick={() => { }} />
                        <Button type="button-secondary" text="Quero anunciar!" handleClick={() => { }} />
                    </section>
                    </article>
                </div>
            </section>


        </body>
    );
}

export default Startup;