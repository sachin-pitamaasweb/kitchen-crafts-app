import React from "react";

import { Grid, Card, CardContent } from "@mui/material";

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import '../../pages/Products/DomesticProducts/style.css';

const TrinityRange = () => {

    const TrinityRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheTrinityRange/kc-1.png"),
            name: "KC-1003",
            alt: "Trinity Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheTrinityRange/kc-2.png"),
            name: "KC-2006",
            alt: "Trinity Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheTrinityRange/kc-3.png"),
            name: "KC-3006",
            alt: "Trinity Range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card" data-aos="zoom-in" data-aos-duration="1000">
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5">
                                The Trinity Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    TrinityRange.map((item, index) => {
                                        return (
                                            <>
                                                <div className="domestic-products-card-image-div" key={index} data-aos="zoom-in" data-aos-duration="1000">
                                                    <img
                                                        src={item.img}
                                                        alt={item.alt || 'Trinity Range'}
                                                        className="single-burner-range-image"
                                                    />
                                                    <h6 className="domestic-products-name-h6">
                                                        {item.name}
                                                    </h6>
                                                </div>
                                            </>
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
                                 "High Efficiency Brass Burner",
                                 'Sturdy Pan Support',
                                 'Perfect Blue Flame',
                                 'Slim Design',
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default TrinityRange;