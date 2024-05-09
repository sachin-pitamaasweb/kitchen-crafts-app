import React from "react";

//MUI
import { Grid, Card, CardContent } from "@mui/material";

import Title from "../../common/Title";

//Styles
import "./style.css";


const OurWork = () => {

    const OurWorkItems = [
        {
            no: '01',
            title: "CONSULTANT & MANUFACTURER",
            desc: ' Not just manufacturer and consultant, you can also interact with professionals in the kitchen and restaurant equipment business at Prestair Systems. We strive for excellence in everything we do.'
        },
        {
            no: '02',
            title: "COMMERCIAL KITCHEN LAYOUT",
            desc: 'Planning equipment design and structure according to the kitchen space in order to maximize staff efficiency.',
        },
        {
            no: '03',
            title: "CUSTOMIZED EQUIPMENT",
            desc: 'Your preferences are our primary objective and our experts are here to get the things done according to your specifications.',
        },
        {
            no: '04',
            title: "FLOOR PLANNING",
            desc: 'We understand that Perfection and satisfaction matter a lot in culinary businesses and this is why we combine our outlook and best preferences to design your business space to the best.',

        }
    ]
    return (
        <>
            <Grid container className="our-work-container" spacing={2}>
                <Grid item xs={12} className="our-work-grid">
                    <Title title="Our Work" />
                </Grid>
                {
                    OurWorkItems.map((item, index) => (
                        <Grid item xs={12} lg={6} md={6} className="our-work-grid-card" key={index}>
                            <div className="our-work-card" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="our-work-card-text-no">
                                    <h5 className="our-work-card-h5-no">{item.no}</h5>
                                    <h5 className="our-work-card-h5">{item.title}</h5>
                                </div>
                                <Card className="our-work-card-text">
                                    <CardContent
                                        className="our-work-card-content-text">
                                        {item.desc}
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
};

export default OurWork; 