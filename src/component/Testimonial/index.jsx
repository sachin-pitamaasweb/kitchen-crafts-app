import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css'

import { Rating } from '@mui/material';

import Title from  '../../common/Title/index.jsx';

const Testimonial = () => {

    const testiMonials = [
        {
            name: 'Meera',
            stars: 5,
            description: 'Its sleek design and top-notch performance turn cooking into a fun culinary adventure. With its efficient services, every meal is a delightful masterpiece.',
            img: require('../../assets/Testimonial/test-1.png'),
        },
        {
            name: 'Deepika',
            stars: 5,
            description: 'I love the design of KITCHER CRAFT; where style meets functionality, making cooking a breeze.',
            img: require('../../assets/Testimonial/test-2.png'),
        },
        {
            name: 'Priya',
            stars: 5,
            description: "I'm obsessed with KITCHEN CRAFT's design. It's like having a stylish chef in my kitchen, making cooking feel like a fun adventure every time!",
            img: require('../../assets/Testimonial/test-3.png'),
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <Title title="Testimonial" />
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item" key={testiMonials.name} data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={require('../../assets/Testimonial/test-2.png')} alt="testomonial" />
                                            <h5 className="testomonial-card-h5-name">Deepika</h5>
                                            <Rating name="read-only" value={5} readOnly className="testomonial-card-rating" />
                                            <p className='testomonial-card-p'>I love the design of KITCHER CRAFT; where style meets functionality, making cooking a breeze.</p>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <div className="item" key={testiMonialDetail.name} data-aos="zoom-in" data-aos-duration="1000">
                                                <div className="shadow-effect">
                                                    <img className="img-circle" src={testiMonialDetail.img} alt="testomonial" />
                                                  
                                                    <h5 className="testomonial-card-h5-name">{testiMonialDetail.name}</h5>
                                                    <Rating name="read-only" value={testiMonialDetail.stars} readOnly className="testomonial-card-rating" />
                                                    <p className='testomonial-card-p'>{testiMonialDetail.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;