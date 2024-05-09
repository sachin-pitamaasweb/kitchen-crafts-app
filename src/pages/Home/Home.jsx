import React from "react";

// Common components
import Banner from "../../common/Banner";

//component
import OurWork from "../../component/OurWork/index.jsx";
import HowWeWork from "../../component/HowWeWork/index.jsx";
import OurFamily from "../../component/OurFamily/index.jsx";
import Testimonial from "../../component/Testimonial/index.jsx";
import DomesticFeatures from "../../component/DomesticFeatures/index.jsx";
import DomesticBestSeller from "../../component/DomesticBestSeller/index.jsx";
import CommercialFeatures from "../../component/CommercialFeatures/index.jsx";
import PremiumGasStovePromo from "../../component/PremiumGasStovePromo/index.jsx";
import CommercialBestSellers from "../../component/CommercialBestSellers/index.jsx";

//Helper
import { homeBannerSlides } from "../../helpers/index";

import './style.css';

const Home = () => {
    return (
        <>
            <div className="home">
                <Banner
                    slides={homeBannerSlides}
                />
                 <PremiumGasStovePromo />
                 <DomesticFeatures />
                 <DomesticBestSeller />
                <CommercialBestSellers />
                <CommercialFeatures />
                <OurWork />
                <HowWeWork />
                <OurFamily />
                <Testimonial />
            </div>
        </>
    )
}
export default Home