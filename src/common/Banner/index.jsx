import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = ({ slides, interval = 3000 }) => {
    return (
        <Carousel>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}
                 interval={interval} 

                 >
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`} 
                        style={{ width: "100%", objectFit: "cover" }} 
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};



export default Banner;
