import React from "react";

//MUI
import { Grid } from "@mui/material";

//Styles
import "./style.css";

const Banners = ({ imgUrl }) => {
    if (!imgUrl) {
        return <div className="no-banner">Image not found</div>;
    }
    return (
        <>
            <Grid container className="banners-container" spacing={2}>
                <Grid item xs={12} className="banners-grid">
                    <img
                        src={imgUrl}
                        alt="banners"
                        className="banners-image"
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default Banners