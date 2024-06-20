
import React from "react";
import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const SingleBurnerRange = () => {

    const SingleBurnerRange = [
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/img-1.png"),
            name: "KC-00 Single(L)",
            alt: "KC-00 Single(L)",
        },
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/img-2.png"),
            name: "KC-101 Prince",
            alt: "KC-101 Princee",
        },
        {
            img: require("../../assets/Products/DomesticRange/SingleBurnerRange/img-3.png"),
            name: "KC-102 Prestige",
            alt: "KC-102 Prestige",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="domestic-products-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="zoom-in" data-aos-duration="500">
                                The Single Burner Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    SingleBurnerRange.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1"
                                                    sx={{
                                                        transition: '0.3s',
                                                        '&:hover': {
                                                            transform: 'scale(1.03)',
                                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                        },
                                                    }}
                                                >
                                                    <div className="domestic-products-card-image-div" key={index}>
                                                        <div className="domestic-products-card-image-div-1">
                                                            <img
                                                                src={item.img}
                                                                alt={item.alt || item.name}
                                                                className="single-burner-range-image"
                                                                data-aos="zoom-in" data-aos-duration="500"
                                                            />
                                                        </div>
                                                        <h6 className="domestic-products-name-h6" data-aos="zoom-in" data-aos-duration="500">
                                                            {item.name}
                                                        </h6>
                                                    </div>
                                                </Grid>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            <Hr />
                            <FeatureList
                                title="Features"
                                features={[
                                    "Stainless Steel Body",
                                    "Cast Iron Burner-Painted",
                                    "MS Powder Coated Pan Support",
                                    "Skid Free Rubber Legs For Better Stability",
                                    "Strong Bakelite Knob",
                                    "Complies with IS 4246 standards."
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SingleBurnerRange;