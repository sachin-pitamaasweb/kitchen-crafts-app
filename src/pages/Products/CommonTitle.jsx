import React from "react";
import { Grid } from '@mui/material';

import './CommonTitle.css';

const CommonTitle = ({ title }) => {
    if(!title){
        return null;
    }
    return (
        <Grid container spacing={2} className="common-title">
            <Grid item xs={12}  >
              <h5 className="common-title-h5" data-aos="flip-up" data-aos-duration="500">{title}</h5>
            </Grid>
        </Grid>
    )
}
export default CommonTitle;
