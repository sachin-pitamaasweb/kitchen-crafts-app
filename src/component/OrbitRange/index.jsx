import React from "react";

import { Grid, Card, CardContent } from '@mui/material';

// import Hr from "../../common/Hr/index.jsx";
// import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const TheOrbitRange = () => {

    const TheOrbitRange = [
        {
            id: 1,
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/img-1.png"),
            name: "KC-212 Smart",
            alt: "KC-212 Smart",
        },
        {
            id: 2,
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/img-2.png"),
            name: "KC-207 Supreme",
            alt: "KC-207 Supreme",
        },
        {
            id: 3,
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/img-5.png"),
            name: "KC-213 VS2 Heavy",
            alt: "KC-213 VS2 Heavy",
        },
        {
            id: 4,
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/img-4.png"),
            name: "KC-214 VS2",
            alt: "KC-214 VS2",
        },
        {
            id: 5,
            img: require("../../assets/Products/DomesticRange/TheOrbitRange/img-5.png"),
            name: "KC-215 Double Bull",
            alt: "KC-215 Double Bull",
        },
    ]
    return (
        <>
            <Grid container spacing={2} className="the-spectra-range-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
                                The Orbit Range
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
                                    TheOrbitRange.map((item) => {
                                        return (
                                            <React.Fragment key={item.id}>
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1"
                                                    sx={{
                                                        transition: '0.3s',
                                                        '&:hover': {
                                                            transform: 'scale(1.03)',
                                                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                        },
                                                    }}
                                                >
                                                    <div className="domestic-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
                                                     <div className="domestic-products-card-image-div-1">
                                                     <img
                                                            src={item.img}
                                                            alt={item.alt || 'reflecto-range'}
                                                            className="single-burner-range-image"
                                                        />
                                                     </div>
                                                        <h6 className="domestic-products-name-h6">
                                                            {item.name}
                                                        </h6>
                                                    </div>
                                                </Grid>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </Grid>
                            {/* <Hr />
                            <FeatureList
                                title={'Features'}
                                features={[
                                    'TOUGHENED GLASSTOP',
                                    'ROUND EURO COATED GRID',
                                    'HEAVY BRASS BURNERS',
                                    'EASY CLEANING & MAINTENANCE',
                                    'EASY CLEANING & MAINTENANCE',
                                    'EASY CLEANING & MAINTENANCE',
                                ]}
                            /> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default TheOrbitRange;