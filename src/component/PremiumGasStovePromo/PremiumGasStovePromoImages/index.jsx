import React from "react";

// MUI
import { Grid } from '@mui/material';

// Styles
import './style.css';

const PremiumGasStovePromoImagesData = [
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-1.png"),
    name: 'KC-208 Economy',
  },
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-2.png"),
    name: 'KC-3009',
  },
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-3.png"),
    name: 'KC-2007 Super Deluxe',
  },
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-4.png"),
    name: 'KC-3003',
  },
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-5.png"),
    name: 'KC-102 Prestige',
  },
  {
    imageSrc: require("../../../assets/PremiumGasStovePromo/img-6.png"),
    name: 'KC-200 Lite',
  }
];

const PremiumGasStovePromoImages = () => {

  return (
    <>

      {
        PremiumGasStovePromoImagesData.map((data, index) => (
          <Grid
            item xs={12} lg={4} xl={4} md={4} sm={12}
            key={index}
            className="premium-gas-stove-promo-images-grid"
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
                src={data.imageSrc}
                className="premium-gas-stove-promo-images"
                alt={data.name}
              />
              <p className="premium-gas-stove-promo-images-name">{data.name}</p>
            </div>
          </Grid>
        ))
      }
    </>
  );
};

export default PremiumGasStovePromoImages;
