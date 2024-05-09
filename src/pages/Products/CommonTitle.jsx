import React from "react";
import { Grid } from '@mui/material';

import './CommonTitle.css';

const CommonTitle = ({ title }) => {
    if(!title){
        return null;
    }
    return (
        <Grid container spacing={2} className="common-title" >
            <Grid item xs={12} data-aos="zoom-in" data-aos-duration="1000">
              <h5 className="common-title-h5">{title}</h5>
            </Grid>
        </Grid>
    )
}
export default CommonTitle;