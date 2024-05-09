// import React from "react";

// //MUI
// import { Grid } from '@mui/material';

// //Images
// import PremiumGasStovePromoImages from "./PremiumGasStovePromoImages";

// //styles
// import './style.css';

// const PremiumGasStovePromo = () => {
//     return (
//         <>
//             <Grid container className="premium-gas-stove-promo" spacing={2}>
//                 <Grid item xs={12} lg={6} md={6} className="premium-gas-stove-promo-grid" id="premium-gas-stove">
//                     <div className="premium-gas-stove-promo-1" data-aos="zoom-in" >
//                         <div className="premium-gas-stove-promo-div">
//                             <img src={require("../../assets/PremiumGasStovePromo/gas-stove.png")} alt="banner" className="premium-gas-stove-promo-image" />
//                         </div>
//                     </div>
//                 </Grid>
//                 <Grid item xs={12} lg={6} md={6}>
//                     <div className="premium-gas-stove-promo-text-div" data-aos="zoom-in" >
//                         <img src={require("../../assets/PremiumGasStovePromo/text.png")} alt="banner" className="premium-gas-stove-promo-image-1" />
//                     </div>
//                 </Grid>
//                 <Grid item xs={12} className="premium-gas-stove-promo-button-div">
//                     <button className="premium-gas-stove-promo-button" data-aos="zoom-in" >
//                         View All
//                     </button>
//                 </Grid>
//                 <PremiumGasStovePromoImages />
//             </Grid>
//         </>
//     )
// }

// export default PremiumGasStovePromo

import React, { useEffect } from "react";
import { Grid } from "@mui/material"; // MUI
import AOS from "aos"; // AOS Library
import "aos/dist/aos.css"; // AOS styles
import "./style.css"; // Custom styles

import PremiumGasStovePromoImages from "./PremiumGasStovePromoImages";

const PremiumGasStovePromo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will only occur once when scrolling
      offset: 100, // Animation starts when the element is 100px from the top
    });
  }, []); // Initialize AOS only once

  return (
    <>
      <Grid container className="premium-gas-stove-promo" spacing={2}>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          className="premium-gas-stove-promo-grid"
          id="premium-gas-stove"
          data-aos="fade-right" // Example animation
        >
          <div className="premium-gas-stove-promo-1">
            <div className="premium-gas-stove-promo-div">
              <img
                src={require("../../assets/PremiumGasStovePromo/gas-stove.png")}
                alt="banner"
                className="premium-gas-stove-promo-image"
              />
            </div>
          </div>
        </Grid>
        
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          data-aos="fade-left" // Example animation
        >
          <div className="premium-gas-stove-promo-text-div">
            <img
              src={require("../../assets/PremiumGasStovePromo/text.png")}
              alt="banner"
              className="premium-gas-stove-promo-image-1"
            />
          </div>
        </Grid>
        
        <Grid
          item
          xs={12}
          className="premium-gas-stove-promo-button-div"
          data-aos="fade-up" // Example animation
        >
          <button
            className="premium-gas-stove-promo-button"
          >
            View All
          </button>
        </Grid>
        
        <PremiumGasStovePromoImages />
      </Grid>
    </>
  );
};

export default PremiumGasStovePromo;
