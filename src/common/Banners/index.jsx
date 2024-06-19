import React from "react";

//MUI
import { Grid } from "@mui/material";

//Styles
import "./style.css";

const Banners = ({ imgUrl, isOverlay, title }) => {
    if (!imgUrl) {
        return <div className="no-banner">Image not found</div>;
    }
    return (
        <>
         {!isOverlay ?  (
            <Grid container className="banners-container" spacing={2}>
            <Grid item xs={12} className="banners-grid">
                <img
                    src={imgUrl}
                    alt="banners"
                    className="banners-image"
                />
            </Grid>
        </Grid>
         )
        :
        (
            <Grid container className="banners-container" spacing={2}>
                    <Grid item xs={12} className="banners-grid">
                        <div className="overlay-container">
                            <img
                                src={imgUrl}
                                alt="banners"
                                className="banners-image"
                            />
                            <div className="overlay-text">{title}</div>
                        </div>
                    </Grid>
                </Grid>
        )
        }
        </>
    )
}
export default Banners