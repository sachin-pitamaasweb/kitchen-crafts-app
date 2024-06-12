import React from "react";

import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const SpectraRange = () => {

    const SpectraRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheSpectraRange/img-1.png"),
            name: "KC-1006",
            alt: "KC-1006",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheSpectraRange/img-2.png"),
            name: "KC-2006",
            alt: "KC-2006",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheSpectraRange/img-3.png"),
            name: "KC-3006",
            alt: "KC-3006",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheSpectraRange/img-4.png"),
            name: "KC-4006",
            alt: "KC-4006",
        },
    ];

    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
                                The Spectra Range
                            </h5>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                justifyContent="center"
                                alignItems="center"
                                className="the-spectra-range"
                            >
                                {
                                    SpectraRange.map((item, index) => {
                                        return (
                                            <>
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1" key={index}
                                                    sx={{
                                                        transition: '0.3s',
                                                        '&:hover': {
                                                            transform: 'scale(1.03)',
                                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                        },
                                                    }}
                                                >
                                                    <div className="domestic-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
                                                        <div className="single-burner-range-image-div-1"
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <img
                                                                src={item.img}
                                                                alt={item.alt || "spectra-range"}
                                                                className="single-burner-range-image"
                                                            />
                                                        </div>
                                                        <h6 className="domestic-products-name-h6">
                                                            {item.name}
                                                        </h6>
                                                    </div>
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                            <Hr />
                            <FeatureList
                                title={'Features'}
                                features={[
                                    "HEAVY BRASS BURNERS",
                                    "JOINTLESS STAINLESS STEEL BODY",
                                    "SMOOTH OPERATING KNOBS",
                                    "ROUND EURO COATED GRID",
                                    "EASY CLEANING & MAINTENANCE",
                                    "MANUAL IGNITION",
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SpectraRange;