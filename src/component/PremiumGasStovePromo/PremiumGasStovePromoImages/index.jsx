import React from "react";

// MUI
import { Grid } from '@mui/material';

// Styles
import './style.css';

const PremiumGasStovePromoImages = () => {

  const stoveImages = [
    require("../../../assets/PremiumGasStovePromo/stove-1.png"),
    require("../../../assets/PremiumGasStovePromo/stove-2.png"),
    require("../../../assets/PremiumGasStovePromo/stove-3.png"),
    require("../../../assets/PremiumGasStovePromo/stove-4.png"),
  ];
  return (
    <>
      {stoveImages.map((imageSrc, index) => (
        <Grid item xs={12} lg={6} md={6} sm={6} key={index}
          sx={{
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            },

          }}
        >
          <div className="premium-gas-stove-promo-images-div" data-aos="zoom-in" data-aos-duration="500">
            <img
              src={imageSrc}
              className="premium-gas-stove-promo-images"
              alt={`stove ${index + 1}`}


            />
          </div>
        </Grid>
      ))}
    </>
  );
};

export default PremiumGasStovePromoImages;
