import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = ({ slides, interval = null }) => {
    return (
        <Carousel>
            {slides.map((slide, index) => (
                <Carousel.Item key={index} interval={interval} >
                    <img
                        src={slide.image}
                        alt={slide.alt || `Slide ${index + 1}`} 
                        style={{ width: "100%", objectFit: "cover" }} 
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};



export default Banner;
