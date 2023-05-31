import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import "./style.scss"

interface CarouselProps {
    images: Array<string>
}

function Carousel({ images }: CarouselProps) {


    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!carousel.current) throw Error("carousel is not assigned");

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <>
            <motion.section
                className="carousel"
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                drag="x"
                dragConstraints={{ right: 0, left: width * 10}}
            >
                <motion.div className="carousel__inner">
                    {images.map((image) => (
                        <motion.div className="inner__image">
                            <img src={image} alt="Imagem de um evento recente." />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
}

export default Carousel;