import React, { useEffect } from "react";
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
                    <div className="premium-gas-stove-promo-1"  >
                        <div className="premium-gas-stove-promo-div" data-aos="zoom-in" data-aos-duration="500">
                            <img src={require("../../assets/PremiumGasStovePromo/gas-stove.png")} alt="gas-stove" className="premium-gas-stove-promo-image" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <div className="premium-gas-stove-promo-text-div" data-aos="zoom-in" data-aos-duration="500">
                        <img src={require("../../assets/PremiumGasStovePromo/text.png")} alt="text" className="premium-gas-stove-promo-image-1" />
                    </div>
                </Grid>
                <Grid item xs={12} className="premium-gas-stove-promo-button-div">
                    <button className="premium-gas-stove-promo-button" data-aos="zoom-in" data-aos-duration="500" >
                        View All
                    </button>
                </Grid>
                <PremiumGasStovePromoImages />
            </Grid>
        </>
    )
}

export default PremiumGasStovePromo

