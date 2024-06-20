import React from "react";
import { useNavigate } from "react-router-dom";
//MUI
import { useMediaQuery, useTheme } from '@mui/material';

//common
import BestSellersGrid from "../../common/BestSellersGrid";
import BestSellersGridMobileView from "../../common/BestSellersGridMobileView";

//Helper
import { CommercialBestSellersItems, CommercialBestSellersItemsForMobileView } from "../../helpers/index";

const CommercialBestSellers = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleKnowMore = () => {
    window.scrollTo(0, 0);
    navigate("/commercial");
  }
    return(
        <>
       {!matches ? (
           <BestSellersGridMobileView 
           title={"Commercial Best Seller"}
           items={CommercialBestSellersItemsForMobileView}
           className={true}
           handleKnowMore={handleKnowMore}
           />
       )
       :
       (
        <BestSellersGrid 
        title={"Commercial Best Seller"}
        items={CommercialBestSellersItems}
        className={true}
        handleKnowMore={handleKnowMore}
        /> 
       )
       }
        </>
    )
}

export default CommercialBestSellers