import React from "react";

//MUI
import { useMediaQuery, useTheme } from '@mui/material';

//common
import BestSellersGrid from "../../common/BestSellersGrid";
import BestSellersGridMobileView from "../../common/BestSellersGridMobileView";

//Helper
import { CommercialBestSellersItems, CommercialBestSellersItemsForMobileView } from "../../helpers/index";

const CommercialBestSellers = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <>
       {!matches ? (
           <BestSellersGridMobileView 
           title={"Commercial Best Seller"}
           items={CommercialBestSellersItemsForMobileView}
           className={true}
           />
       )
       :
       (
        <BestSellersGrid 
        title={"Commercial Best Seller"}
        items={CommercialBestSellersItems}
        className={true}
        /> 
       )
       }
        </>
    )
}

export default CommercialBestSellers