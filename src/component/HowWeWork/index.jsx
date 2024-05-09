import React from "react";

//MUI
import { Grid } from "@mui/material";

//Helper
import { HowWeWorkItems } from "../../helpers/index";

import Title from "../../common/Title";

//Styles
import "./style.css";


const HowWeWork = () => {
    return (
        <>
            <Grid container className="how-we-work-container" spacing={2}>
                <Grid item xs={12} className="how-we-work-grid">
                    <Title title="How We Work" />
                </Grid>
                <Grid item xs={12} lg={6} md={6} className="how-we-work-grid-image">
                    <img src={require("../../assets/HowWeWork/work.png")} alt="work" className="how-we-work-image" data-aos="zoom-in"  />
                </Grid>
                <Grid item xs={12} lg={6} md={6} className="how-we-work-grid-text">
                    {
                        HowWeWorkItems.map((item, index) => (
                            <div className="how-we-work" key={index} data-aos="zoom-in" >
                               <div className="how-we-work-grid-text-div">
                               <h5 className="how-we-work-h5">{item.steps}</h5>
                                <p className="how-we-work-p">{item.text}</p>
                               </div>
                            </div>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}
export default HowWeWork;