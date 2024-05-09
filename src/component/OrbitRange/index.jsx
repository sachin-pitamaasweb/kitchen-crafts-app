import React from 'react';

import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import '../../pages/Products/DomesticProducts/style.css';

const TheOrbitRange = () => {

    const TheOrbitRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/kc-1.png"),
            name: "KC-212 Smart",
            alt: "Orbit Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/kc-1.png"),
            name: "KC-213 Prestige",
            alt: "Orbit Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/kc-1.png"),
            name: "KC-214 Magic",
            alt: "Orbit Range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
                                The Orbit Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    TheOrbitRange.map((item, index) => {
                                        return (
                                            <>
                                                <div className="domestic-products-card-image-div" key={index} data-aos="zoom-in" data-aos-duration="500">
                                                    <img
                                                        src={item.img}
                                                        alt={item.alt || "Orbit Range"}
                                                        className="single-burner-range-image"
                                                    />
                                                    <h6 className="domestic-products-name-h6">
                                                        KC-211 Magic
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
                                    'Stainless Steel Body',
                                    'Brass Burner Set',
                                    'Electroplated Burner Set',
                                    'MS Powder Coated Pan Support',
                                    'Drip Tray',
                                    'C.I. 3 Round Pan Support'
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default TheOrbitRange