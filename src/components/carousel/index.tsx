import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable";

import "./style.scss"
import Button from "../button";

interface CarouselProps {
    images: Array<string>
}

function Carousel({ images }: CarouselProps) {


    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [targetedPosition, setTargetedPosition] = useState(0);

    useEffect(() => {
        if (!carousel.current) throw Error("carousel is not assigned");

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    const handleSwipe = useSwipeable({
        onSwiped: ({ dir }) => {
            if (dir === "Right") {
                if (targetedPosition > 0) {
                    setTargetedPosition(targetedPosition - 1);
                }
            }
            if (dir === "Left") {
                if (targetedPosition < images.length - 1) {
                    setTargetedPosition(targetedPosition + 1);
                }
            }

        },
        trackMouse: false,
        trackTouch: true,
    })

    const handleSelectedImageStyle = (index: number) => {
        if (targetedPosition === index) {
            return "inner__image__selected";
        }

        return "inner__image__unselected";
    }

    return (
        <div {...handleSwipe}>
            <motion.section
                className="carousel"
                ref={carousel}
            >
                <motion.div className="carousel__inner">
                    {
                        images.map((image, index) => (
                            <motion.div
                                className={`inner__image`}
                                initial={{ scale: 0 }}
                                animate={{
                                    rotate: 0,
                                    left: `${(index - targetedPosition) * 60}vw`,
                                    scale: index === targetedPosition ? 1 : 0.8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                key={index}
                            >
                                <img className={handleSelectedImageStyle(index)} src={image} alt="Imagem de um evento recente." />
                            </motion.div>
                        ))}
                </motion.div>

            </motion.section>
            <section className="carousel__sliders">
                {images.map((_, index) => {
                    return <Button type="button-secondary" text=" " handleClick={() => {
                        if (index !== targetedPosition) {
                            setTargetedPosition(index);
                        }
                    }} />
                })}
            </section>
        </div>
    );
}

export default Carousel;