// import React from "react";

// import { Grid, Card, CardContent } from '@mui/material';

// import Hr from "../../common/Hr/index.jsx";
// import FeatureList from "../../common/FeatureList";

// import '../../pages/Products/DomesticProducts/style.css';

// const SignatureRange = () => {

//     const SignatureRange = [
//         {
//             img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-1.png"),
//             name: "KC-208 Economy",
//             alt: "Signature Range",
//         },
//         {
//             img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-2.png"),
//             name: "KC-209 Prestige",
//             alt: "Signature Range",
//         },
//         {
//             img: require("../../assets/Products/DomesticRange/TheSignatureRange/kc-3.png"),
//             name: "KC-208 Economy",
//             alt: "Signature Range",
//         }
//     ]
//     return (
//         <>
//             <Grid container spacing={2} className="the-signature-range">
//                 <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
//                     <Card className="domestic-products-card"  >
//                         <CardContent className="domestic-products-card-content">
//                             <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
//                                 The Signature Range
//                             </h5>
//                             <div className="domestic-products-card-image-div-container">
//                                 {
//                                     SignatureRange.map((item, index) => {

//                                         return (
//                                             <>
//                                                 <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1" key={item.id}
//                                                     sx={{
//                                                         transition: '0.3s',
//                                                         '&:hover': {
//                                                             transform: 'scale(1.03)',
//                                                             boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                                                         },
//                                                     }}
//                                                 >
//                                                     <div className="domestic-products-card-image-div" key={index} data-aos="zoom-in" data-aos-duration="500">
//                                                         <div className="domestic-products-card-image-div-1">
//                                                             <img
//                                                                 src={item.img}
//                                                                 alt={item.alt || "Signature Range"}
//                                                                 className="single-burner-range-image"
//                                                             />
//                                                         </div>
//                                                         <h6 className="domestic-products-name-h6">
//                                                             {item.name}
//                                                         </h6>
//                                                     </div>
//                                                 </Grid>

//                                             </>
//                                         )
//                                     })
//                                 }
//                             </div>
//                             <Hr />
//                             <FeatureList
//                                 title={"Features"}
//                                 features={[
//                                     "Stainless Steel Body",
//                                     "Brass Burner Set",
//                                     "Electroplated Burner Set",
//                                     "MS Powder Coated Pan Support",
//                                     "Drip Tray",
//                                     "C.I. 3 Round Pan Support"
//                                 ]}
//                             />
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </>
//     )
// }
// export default SignatureRange


import React from "react";

import { Grid, Card, CardContent } from '@mui/material';

import Hr from "../../common/Hr/index.jsx";
import FeatureList from "../../common/FeatureList/index.jsx";

import '../../pages/Products/DomesticProducts/style.css';

const SignatureRange = () => {

    const SignatureRange = [
        {
            id: 1,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-1.png"),
            name: "KC-201 Gold",
            alt: "KC-201 Gold",
        },
        {
            id: 2,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-2.png"),
            name: "KC-202 Commander",
            alt: "KC-202 Commander",
        },
        {
            id: 3,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-3.png"),
            name: "KC-203 Prime",
            alt: "KC-203 Prime",
        },
        {
            id: 4,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-4.png"),
            name: "KC-204 Benz",
            alt: "KC-204 Benz",
        },
        {
            id: 5,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-5.png"),
            name: "KC-205 Nova",
            alt: "KC-205 Nova",
        },
        {
            id: 6,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-6.png"),
            name: "KC-208 Economy",
            alt: "KC-208 Economy",
        },
        {
            id: 7,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-7.png"),
            name: "KC-211 Magic",
            alt: "KC-211 Magic",
        },
        {
            id: 8,
            img: require("../../assets/Products/DomesticRange/TheSignatureRange/img-7.png"),
            name: "KC-Nano",
            alt: "KC-Nano",
        },
    ]
    return (
        <>
            <Grid container spacing={2} className="the-spectra-range-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="domestic-products-grid">
                    <Card className="domestic-products-card"  >
                        <CardContent className="domestic-products-card-content">
                            <h5 className="domestic-products-card-h5" data-aos="fade-up" data-aos-duration="500">
                            The Signature Range
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
                                    SignatureRange.map((item) => {
                                        return (
                                            <>
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="the-spectra-range-1" key={item.id}
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
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                            <Hr />
                            <FeatureList
                                title={'Features'}
                                features={[
                                    'BUDGET FRIENDLY RANGE',
                                    'MS POWDER COATED PANSUPPORT',
                                    'ADDITIONAL PANSUPPORT FOR EASY COOKING',
                                    'STRONG BAKELITE KNOBS',
                                    'SKID FREE RUBBER LEGS',
                                    'EASY CLEANING & MAINTENANCE',
                                ]}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SignatureRange;