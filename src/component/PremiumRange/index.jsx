import React from "react";
import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import '../../pages/Products/DomesticProducts/style.css';

const PremiumRange = () => {

    const PremiumRange = [
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/kc-1.png"),
            name: "KC-2012 Mitaso",
            alt: "Premium Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/kc-2.png"),
            name: "KC-2013 Prestige",
            alt: "Premium Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/kc-3.png"),
            name: "KC-2014 Prestige",
            alt: "Premium Range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card" data-aos="zoom-in" data-aos-duration="1000">
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5">
                                The Premium Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    PremiumRange.map((item, index) => {
                                        return (
                                            <div className="domestic-products-card-image-div" key={index} data-aos="zoom-in" data-aos-duration="1000">
                                                <img
                                                    src={item.img}
                                                    alt={item.alt || 'Premium Range'}
                                                    className="single-burner-range-image"
                                                />
                                                <h6 className="domestic-products-name-h6">
                                                    KC-2007 Super Deluxe
                                                </h6>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Hr />
                            <FeatureList
                                title={"Features"}
                                features={[
                                    "Stainless Steel Body",
                                    "Brass Burner Set",
                                    "8 Prawn Powder Coated Pan Support",
                                    "Drip Tray"
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default PremiumRange;