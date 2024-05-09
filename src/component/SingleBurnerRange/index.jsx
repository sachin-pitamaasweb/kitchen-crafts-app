
import React from "react";
import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const SingleBurnerRange = () => {

    const SingleBurnerRange = [
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/kc-1.png"),
            name: "KC-00 Single(L)",
            alt: "single-burner-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/kc-2.png"),
            name: "KC-101 Prince",
            alt: "single-burner-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/kc-3.png"),
            name: "KC-102 Prestige",
            alt: "single-burner-range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="domestic-products-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card" data-aos="zoom-in" >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5">
                                The Single Burner Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    SingleBurnerRange.map((item, index) => {
                                        return (
                                            <>
                                                <div className="domestic-products-card-image-div" key={index} data-aos="zoom-in" >
                                                    <img
                                                        src={item.img}
                                                        alt={item.alt || item.name}
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
                                title="Features"
                                features={["Stainless Steel Body", "Brass Burner Set", "Electroplated Burner Set", "2 MS Powder Coated Pan Support", "Brass Burner Set", "Drip Tray"]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SingleBurnerRange;