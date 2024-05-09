import React from "react";

//MUI
import { Grid } from "@mui/material";

import Title from "../../common/Title";

//Styles
import "./style.css";


const LocateUs = () => {
    return (
        <>
            <Grid container className="locate-us-container" spacing={2}>
                <Grid item xs={12} lg={12} md={12} sm={12} className="locate-us-grid-text">
                    <Title title="Locate Us" />
                </Grid>
               <Grid className="locate-us-grid-bg" item xs={12} lg={12} md={12} sm={12} data-aos="zoom-in" >
               <div  className="locate-us-grid-text-bg"></div>
               </Grid>
                <Grid className="locate-us-grid" item xs={12} lg={12} md={12} sm={12} data-aos="zoom-in" >
                    <iframe
                        className="locate-us-frame"
                        title="Google Map"
                        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522340.7628904274!2d72.28670385887821!3d30.442146502039133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919e42c24c6d4ff%3A0xd515ed799759aed1!2sMRMC%20Foods%20Pvt.%20Ltd.%20-%20Rice%20Mill%20in%20Ferozpur!5e0!3m2!1sen!2sin!4v1712822594332!5m2!1sen!2sin'}
                    >

                    </iframe>
                </Grid>
                <Grid className="locate-us-grid-bg-bottom" item xs={12} lg={12} md={12} sm={12} >
                <div className="locate-us-grid-text-bg-1" data-aos="zoom-in" ></div>
                </Grid>
            </Grid>
        </>
    )
}
export default LocateUs;