import React from "react";
import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import '../../pages/Products/DomesticProducts/style.css';

const PremiumRange = () => {

    const PremiumRange = [
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/img-1.png"),
            name: "KC-2012 Mitaso",
            alt: "Premium Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/img-2.png"),
            name: "KC-2013 Sumo",
            alt: "Premium Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/ThePremiumRange/img-3.png"),
            name: "KC-2007 Super Deluxe",
            alt: "KC-2007 Super Deluxe",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
                                The Premium Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    PremiumRange.map((item, index) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={4} lg={4}
                                            sx={{
                                                transition: '0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.03)',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                },
                                            }}
                                            key={index}
                                        >
                                            <div className="domestic-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
                                               <div className="domestic-products-card-image-div-1">
                                               <img
                                                    src={item.img}
                                                    alt={item.alt || 'Premium Range'}
                                                    className="single-burner-range-image"
                                                />
                                               </div>
                                                <h6 className="domestic-products-name-h6">
                                                   {item.name}
                                                </h6>
                                            </div>
                                        </Grid>
                                        )
                                    })
                                }
                            </div>
                            <Hr />
                            <FeatureList
                                title={"Features"}
                                features={[
                                    "8 PRAWNS SUPER STURDY PANSUPPORT",
                                    "SMOOTH OPERATING KNOBS",
                                    "HIGH EFFICIENCY BRASS BURNERS",
                                    "SKID FREE RUBBER LEGS",
                                    "EASY CLEANING & MAINTENANCE",
                                    "UNIQUE BODY DESIGN"
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