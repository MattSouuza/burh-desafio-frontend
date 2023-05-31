import { useState } from "react";
import { motion } from "framer-motion"

import pablloImg from "../../assets/pabllo.png"
import leoImg from "../../assets/leo-santana.jpg"
import avrilImg from "../../assets/avril.jpg"

import Button from "../../components/button";
import "./style.scss"
import Carousel from "../../components/carousel";

function Startup() {
    const [count, setCount] = useState(0)


    return (
        <body className="startup">
            <h1 id="startup__title">Eventos acontecendo agora!</h1>

            <Carousel images={[leoImg, pablloImg, avrilImg]} />

            <Button type="button-primary" text="Botão" handleClick={setCount} />
        </body>
    );
}

export default Startup;