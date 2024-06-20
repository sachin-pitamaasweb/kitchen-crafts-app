import React from "react";
import { useNavigate } from "react-router-dom";
//MUI
import { useMediaQuery, useTheme } from '@mui/material';

//common
import BestSellersGrid from "../../common/BestSellersGrid";
import BestSellersGridMobileView from "../../common/BestSellersGridMobileView";

//Helper
import { DomesticBestSellerItems } from "../../helpers/index";

//Styles
import './style.css'

const BestSeller = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const handleKnowMore = () => {
        window.scrollTo(0, 0);
        navigate("/domestic");
    }

    return (
        <>
            {!matches ? (
                <BestSellersGridMobileView
                    title={"Domestic Best Seller"}
                    items={DomesticBestSellerItems}
                    handleKnowMore={handleKnowMore}
                />
            )
                :
                (<BestSellersGrid
                    title={"Domestic Best Seller"}
                    items={DomesticBestSellerItems}
                    handleKnowMore={handleKnowMore}
                />


                )
            }


            <div className="domestic-best-seller-text">
                <p className={!matches ? "domestic-best-seller-p-mobile" : "domestic-best-seller-p"}>
                    "Transform your kitchen with innovative gas stoves,
                    blending sleek design with unparalleled performance.
                    Elevate your cooking experience and unleash your culinary creativity.
                    Welcome to a new era of precision and perfection."
                </p>
            </div>
        </>
    )
}
export default BestSeller