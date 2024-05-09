import React from "react";

//common
import Banners from "../../common/Banners";

//component
import AboutText from "../../component/AboutText";
import OurMission from "../../component/OurMission";

import AboutImageBanner from "../../assets/banner/about-banner.svg";

const About = () => {
    return (
        <>
            <Banners
                imgUrl={AboutImageBanner}
            />
            <AboutText />
            <OurMission />

        </>
    )
}
export default About