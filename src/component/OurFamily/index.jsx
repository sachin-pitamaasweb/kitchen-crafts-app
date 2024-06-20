import React from "react";

//MUI
import { Grid } from "@mui/material";

import Title from "../../common/Title";

//Styles
import "./style.css";

const OurFamily = () => {

    const OurFamilyItems = [
        {
            no: '100+',
            text: "Total Products"
        },
        {
            no: 50,
            text: "Total Family"
        },
        {
            no: "40000+",
            text: "Infrastructure (Sq Ft.)"
        },
        {
            no: 30,
            text: 'Experience(Years)'
        }
    ]
    return (
        <>
            <Grid container className="our-family-container" spacing={2}>
                <Grid item xs={12} className="our-family-grid">
                    <Title title="Our Family" />
                </Grid>
                {
                    OurFamilyItems.map((item, index) => (
                        <Grid item xs={12} sm={12} lg={3} md={3} key={index} className="our-family-grid-images">
                            <div className="our-family" data-aos="zoom-in" data-aos-duration="500">
                                <h5 className="our-family-h5-no">
                                    {item.no} 
                                </h5>
                                <h5 className="our-family-h5-text">
                                    {item.text}
                                </h5>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}
export default OurFamily