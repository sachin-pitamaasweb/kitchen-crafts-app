import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Title from "../Title";

import './style.css';

const FeatureGrid = ({title, items}) => {

        const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return(
        <>
        <div className="domestic-features-div">
        <Title title={title} />
        <Slider {...sliderSettings}>
                {items.map((features, index) => (
                    <div key={index} className="features-slide">
                        <div className='features-card'>
                            <div className="features-image-wrapper">
                                <img src={features.image} alt={features.title} className="features-image" />
                            </div>
                            <h3 className="feature-h3">{features.text}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}
export default FeatureGrid;