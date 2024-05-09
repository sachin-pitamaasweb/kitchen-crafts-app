import React from "react";

// MUI
import { Grid } from "@mui/material";

import Title from "../../common/Title";

// Styles
import "./style.css";


const OurMission = () => {
    const ourMissionItems = [
        {
            imgUrl: require("../../assets/About/our-mission.png"),
            title: 'INNOVATIVE TECHNOLOGY',
        },
        {
            imgUrl: require("../../assets/About/our-mission-1.png"),
            title: 'GLOBAL IMPACT',
        },
        {
            imgUrl: require("../../assets/About/our-mission-2.png"),
            title: 'SAFETY AND EFFICIENCY',
        },
        {
            imgUrl: require("../../assets/About/our-mission-3.png"),
            title: 'PRODUCTION EXCELLENCE',
        },
        {
            imgUrl: require("../../assets/About/our-mission-4.png"),
            title: 'FUTURE FOCUSED DEVELOPMENT',
        },
    ];

    return (
        <>
            <Grid container className="our-mission-container"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
                 
                >
                <Grid item xs={12} className="our-mission-grid">
                    <Title title="Our Mission" />
                </Grid>
                {
                    ourMissionItems.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                            md={4}
                            className="our-mission-image-text-grid"
                             
                        >
                            <div className="our-mission-image-text-div">
                                <div className="our-mission-image-div">
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title}
                                        className="our-mission-image"
                                    />
                                </div>
                                <h5 className="our-mission-title">{item.title}</h5>
                            </div>
                        </Grid>
                    ))
                }
                <Grid item xs={12} className="our-mission-grid-text"  >
                    <p className="our-mission-p">
                        Greencook, based in Varanasi, is a global leader in super fuel-efficient cooking appliances, transforming clean cooking worldwide. Their modern gas stove facility,
                        launched in 2019, emphasizes safety and efficiency with a remarkable production rate of a stove every minute and a 99.95% accuracy rate.
                        With a forward-thinking development team, Greencook continues to innovate LPG and electric/hybrid stoves,
                        shaping a sustainable future for cooking technologies in India and beyond.
                    </p>
                </Grid>
            </Grid>

        </>
    );
};

export default OurMission;
