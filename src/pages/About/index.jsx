import React from "react";

//common
import Banners from "../../common/Banners";

//component
import AboutText from "../../component/AboutText";
import OurMission from "../../component/OurMission";

const About = () => {
    return (
        <>
            <Banners
                imgUrl={require("../../assets/banner/about-banner.png")}
            />
            <AboutText />
            <OurMission />

        </>
    )
}
export default About