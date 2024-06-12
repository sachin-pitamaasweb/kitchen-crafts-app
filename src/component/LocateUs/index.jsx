import React from "react";

//MUI
import { Grid } from "@mui/material";

import Title from "../../common/Title";

//Styles
import "./style.css";


const LocateUs = () => {
    return (
        <>
            <Grid container className="locate-us-container" spacing={2} data-aos="zoom-in" data-aos-duration="500">
                <Grid item xs={12} lg={12} md={12} sm={12} className="locate-us-grid-text">
                    <Title title="Locate Us" />
                </Grid>
               <Grid className="locate-us-grid-bg" item xs={12} lg={12} md={12} sm={12}  >
               <div  className="locate-us-grid-text-bg"></div>
               </Grid>
                <Grid className="locate-us-grid" item xs={12} lg={12} md={12} sm={12}  >
                    <iframe
                        className="locate-us-frame"
                        title="Google Map"
                        src={'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14426.416883809621!2d82.986583!3d25.3174981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718194828524!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'}
                    >

                    </iframe>
                </Grid>
                <Grid className="locate-us-grid-bg-bottom" item xs={12} lg={12} md={12} sm={12} >
                <div className="locate-us-grid-text-bg-1"  ></div>
                </Grid>
            </Grid>
        </>
    )
}
export default LocateUs;