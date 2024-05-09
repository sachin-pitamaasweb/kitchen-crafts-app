import React from "react";

//MUI
import { Grid } from '@mui/material';

//Images
import PremiumGasStovePromoImages from "./PremiumGasStovePromoImages";

//styles
import './style.css';

const PremiumGasStovePromo = () => {
    return (
        <>
            <Grid container className="premium-gas-stove-promo" spacing={2}>
                <Grid item xs={12} lg={6} md={6} className="premium-gas-stove-promo-grid" id="premium-gas-stove">
                    <div className="premium-gas-stove-promo-1" data-aos="zoom-in" >
                        <div className="premium-gas-stove-promo-div">
                            <img src={require("../../assets/PremiumGasStovePromo/gas-stove.png")} alt="banner" className="premium-gas-stove-promo-image" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <div className="premium-gas-stove-promo-text-div" data-aos="zoom-in" >
                        <img src={require("../../assets/PremiumGasStovePromo/text.png")} alt="banner" className="premium-gas-stove-promo-image-1" />
                    </div>
                </Grid>
                <Grid item xs={12} className="premium-gas-stove-promo-button-div">
                    <button className="premium-gas-stove-promo-button" data-aos="zoom-in" >
                        View All
                    </button>
                </Grid>
                <PremiumGasStovePromoImages />
            </Grid>
        </>
    )
}

export default PremiumGasStovePromo