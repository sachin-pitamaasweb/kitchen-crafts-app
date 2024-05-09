import React from "react";

import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const ReflectoRange = () => {

    const ReflectoRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheReflectoRange/kc-1.png"),
            name: "KC-2009 Junior",
            alt: "reflecto-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheReflectoRange/kc-2.png"),
            name: "KC-3009 Junior",
            alt: "reflecto-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheReflectoRange/kc-2.png"),
            name: "KC-4009 Junior",
            alt: "reflecto-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheReflectoRange/kc-2.png"),
            name: "KC-5009 Junior",
            alt: "reflecto-range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheReflectoRange/kc-2.png"),
            name: "KC-6009 Junior",
            alt: "reflecto-range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-spectra-range-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card" data-aos="zoom-in" >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5">
                                The Reflecto Range
                            </h5>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                justifyContent="center"
                                alignItems="center"
                                className="the-spectra-range"
                                data-aos="zoom-in" 
                            >

                                {
                                    ReflectoRange.map((item, index) => {
                                        return (
                                            <>
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1" key={index} data-aos="zoom-in" >
                                                    <img
                                                        src={item.img}
                                                        alt={item.alt || 'reflecto-range'}
                                                        className="single-burner-range-image"
                                                    />
                                                    <h6 className="domestic-products-name-h6">
                                                        {item.name}
                                                    </h6>
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
                                    'Stainless Steel Body',
                                    'Brass Burner Set',
                                    'High Efficiency Brass Burner',
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
export default ReflectoRange;