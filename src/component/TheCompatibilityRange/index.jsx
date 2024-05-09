import React from "react";

import { CardContent, Grid, Card } from "@mui/material";

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import './style.css';

const TheCompatibilityRange = () => {

    const CompatibilityRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/kc-1.png"),
            name: 'KC-207 Supreme',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/kc-2.png"),
            name: 'KC-208 Supreme',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/kc-3.png"),
            name: 'KC-209 Supreme',
        }
    ];

    const Commander = [
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-1.png"),
            name: 'KC-202 Commander',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-1.png"),
            name: 'KC-202 Commander',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-1.png"),
            name: 'KC-202 Commander',
        },

    ];

    const Prime = [
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-1.png"),
            name: 'KC-203 Prime',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-1.png"),
            name: 'KC-203 Prime',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-1.png"),
            name: 'KC-203 Prime',
        }
    ];

    const Benz = [
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-1.png"),
            name: 'KC-204 Benz',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-1.png"),
            name: 'KC-204 Benz',
        },
        {
            img: require("../../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-1.png"),
            name: 'KC-204 Benz',
        }
    ]

    return (
        <>
            <Grid
                className="the-compatibility-range"
                container
                spacing={2}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} className="the-compatibility-range-grid">
                    <Card className="the-compatibility-range-card"  >
                        <CardContent className="the-compatibility-range-card-content">
                            <h5 className="the-compatibility-range-card-h5">The Compatibility Range</h5>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                justifyContent="center"
                                alignItems="center"
                                className="the-compatibility-range-card-grid"
                            >
                                {
                                    CompatibilityRange.map((item, index) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={4} lg={4} className="the-compatibility-range-card-grid-1" key={index}>
                                                <div className="the-compatibility-range-card-image-div"  >
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="the-compatibility-range-single-burner"
                                                    />
                                                    <h6 className="the-compatibility-range-name-h6">
                                                        {item.name}
                                                    </h6>
                                                </div>
                                            </Grid>
                                        )
                                    }
                                    )
                                }
                            </Grid>
                            <div className="the-compatibility-range-kc-commander">
                                <h6 className="the-compatibility-range-kc-commander-h6">KC-202 Commander</h6>
                                <Grid container spacing={2} className="the-compatibility-range-card-grid">
                                    {
                                        Commander.map((item, index) => {
                                            return (
                                                <>
                                                    <Grid 
                                                    item xs={12} sm={12} md={4} lg={4} 
                                                    className="the-compatibility-range-card-grid-1"
                                                     key={index} 
                                                     
                                                      
                                                      >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className="the-compatibility-kc-commander"
                                                        />
                                                        <h6 className="the-compatibility-range-name-h6">
                                                            {item.name}
                                                        </h6>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                </Grid>
                            </div>
                            <div className="the-compatibility-range-kc-commander">
                                <h6 className="the-compatibility-range-kc-commander-h6">KC-203 Prime</h6>
                                <Grid container spacing={2} className="the-compatibility-range-card-grid">
                                    {
                                        Prime.map((item, index) => {
                                            return (
                                                <>
                                                    <Grid 
                                                    item xs={12} sm={12} md={4} lg={4} 
                                                    key={index} 
                                                     
                                                    className="the-compatibility-range-card-grid-1"
                                                    >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className="the-compatibility-kc-commander"
                                                        />
                                                        <h6 className="the-compatibility-range-name-h6">
                                                            {item.name}
                                                        </h6>
                                                    </Grid>
                                                </>
                                            )

                                        })
                                    }
                                </Grid>
                            </div>

                            <div className="the-compatibility-range-kc-commander">
                                <h6 className="the-compatibility-range-kc-commander-h6">KC-204 Benz</h6>
                                <Grid container spacing={2} className="the-compatibility-range-card-grid">
                                    {
                                        Benz.map((item, index) => {
                                            return (
                                                <>
                                                    <Grid 
                                                    item xs={12} sm={12} md={4} lg={4}
                                                     key={index}
                                                      className="the-compatibility-range-card-grid-1"
                                                       
                                                      >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            className="the-compatibility-kc-commander"
                                                        />
                                                        <h6 className="the-compatibility-range-name-h6">
                                                            {item.name}
                                                        </h6>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                </Grid>
                            </div>
                            <Hr />
                            <FeatureList 
                                title={"Features"}
                                features={[
                                    "Stainless Steel Body",
                                     "Brass Burner Set",
                                      "Electroplated Burner Set",
                                      "2 MS Powder Coated Pan Support",
                                      "Brass Burner Set",
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
export default TheCompatibilityRange;
