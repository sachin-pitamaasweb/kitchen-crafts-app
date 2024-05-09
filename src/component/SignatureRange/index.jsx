import React from "react";

import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList";

import '../../pages/Products/DomesticProducts/style.css';

const SignatureRange = () => {

    const SignatureRange = [
        {
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-1.png"),
            name: "KC-208 Economy",
            alt: "Signature Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-2.png"),
            name: "KC-209 Prestige",
            alt: "Signature Range",
        },
        {
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-3.png"),
            name: "KC-211 Magic",
            alt: "Signature Range",
        }
    ]
    return (
        <>
            <Grid container spacing={2} className="the-signature-range">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5">
                                The Signature Range
                            </h5>
                            <div className="domestic-products-card-image-div-container">
                                {
                                    SignatureRange.map((item, index) => {

                                        return (
                                            <>
                                             <div className="domestic-products-card-image-div" key={index}>
                                    <img
                                        src={item.img}
                                        alt={item.alt || "Signature Range"}
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
                                    "Electroplated Burner Set",
                                    "MS Powder Coated Pan Support",
                                    "Drip Tray",
                                    "C.I. 3 Round Pan Support"
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SignatureRange