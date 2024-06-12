// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Banners from "../../../common/Banners";
// import CommonTitle from "../CommonTitle";
// import { Card, CardContent, Grid } from "@mui/material";

// import { productCategories } from "../../../helpers/index";

// import ExploreButton from "../../../common/ExploreButton/index.jsx";

// import ImageProduct from '../../../assets/banner/product-banner.svg';

// import "./style.css";

// // Grid configurations for each subcategory
// const gridConfigurations = {
//     "The Single Burner Range": { xs: 12, sm: 12, md: 8, lg: 8 },
//     "Display Counters": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "The 2 Burner Range": { xs: 12, sm: 12, md: 12, lg: 12 },
//     "The 3 Burner Range": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "The 4 Burner Range": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Kadhai Range": { xs: 12, sm: 12, md: 4, lg: 4 },
//     // "Griddle Grill": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Stock Pot Range": { xs: 12, sm: 12, md: 12, lg: 12 },
//     "Chapati Roti Puffer Plate": { xs: 12, sm: 12, md: 8, lg: 8 },
//     "Exhaust Hood": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Work Table": { xs: 12, sm: 12, md: 12, lg: 12 },
//     "Sink": { xs: 12, sm: 12, md: 12, lg: 12 },
//     "Storage":{ xs: 12, sm: 12, md: 12, lg: 12 },
//     "Wash Trough": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Soiled Dish Landing Table": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Tray Cooling Rack":  { xs: 12, sm: 12, md: 4, lg: 4 },
//     "SS Drain Grating":  { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Dunnage Rack":  { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Hot Bain Marie": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Potato & Onion Bin": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Undercounter Refrigerator with OHS": { xs: 12, sm: 12, md: 8, lg: 8 },
//     "Pickup Counter": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Platform Trolley": { xs: 12, sm: 12, md: 4, lg: 4 },
//     "Dining Table 8 Seater": { xs: 12, sm: 12, md: 8, lg: 8 },
//     "Masala Trolley": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Ingredients Bin": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Bussing Cart": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "GN Pan Trolley": { xs: 12, sm: 12, md: 6, lg: 6 },
//     "Pizza Assembly Counter":  { xs: 12, sm: 12, md: 7, lg: 7 },
//     "Griddle Grill":  { xs: 12, sm: 12, md: 5, lg: 5 },
//     "Bar Counter":  { xs: 12, sm: 12, md: 7, lg: 7 },
// };

// // Filtering commercial products from productCategories
// const commercialProducts = productCategories.find(
//     (category) => category.category === "Commercial Products"
// );

// const CommercialProducts = () => {
//     const navigate = useNavigate();  

//     const handleNavigateDomestic = () => {
//         navigate("/domestic");
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     return (
//         <>
//             <Banners
//                 imgUrl={ImageProduct}
//             />
//             <CommonTitle title={"Commercial Products"} />
//             <Grid 
//             container
//              spacing={2} 

//              className="commercial-products-container"
//              >
//                 {commercialProducts.subcategories.map((subcategory, index) => {
//                     const gridConfig = gridConfigurations[subcategory.subcategory];
//                     return (
//                         <Grid
//                             key={index}
//                             item
//                             xs={gridConfig.xs}
//                             sm={gridConfig.sm}
//                             md={gridConfig.md}
//                             lg={gridConfig.lg}
//                             className="commercial-products-grid"
//                         >
//                             <Card className="commercial-products-card">
//                                 <CardContent className="commercial-products-card-content">
//                                     <h5 className="commercial-products-card-h5">
//                                         {subcategory.subcategory}
//                                     </h5>

//                                     <div className="commercial-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
//                                         {subcategory.products.map((product, productIndex) => (
//                                             <div
//                                                 key={productIndex}
//                                                 className="commercial-products-card-image"       
//                                             >
//                                                 <img
//                                                     src={product.image}
//                                                     alt={product.alt || product.name}
//                                                     className="commercial-products-single-burner"
//                                                 />
//                                                 <h6 className="commercial-products-card-h6">
//                                                     {product.name}
//                                                 </h6>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     );
//                 })}
//                 <ExploreButton 
//                 handleNavigateDomestic={handleNavigateDomestic}
//                 />
//             </Grid>
//         </>
//     );
// };

// export default CommercialProducts;


import React from "react";
import { useNavigate } from "react-router-dom";
import Banners from "../../../common/Banners";
import CommonTitle from "../CommonTitle";
import { Card, CardContent, Grid } from "@mui/material";

import { productCategories } from "../../../helpers/index";

import ExploreButton from "../../../common/ExploreButton/index.jsx";

import ImageProduct from '../../../assets/banner/product-banner.svg';

import "./style.css";

// Grid configurations for each subcategory
const gridConfigurations = {
    "The Single Burner Range": { xs: 12, sm: 12, md: 8, lg: 8 },
    "Display Counters": { xs: 12, sm: 12, md: 4, lg: 4 },
    "The 2 Burner Range": { xs: 12, sm: 12, md: 12, lg: 12 },
    "The 3 Burner Range": { xs: 12, sm: 12, md: 4, lg: 4 },
    "The 4 Burner Range": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Kadhai Range": { xs: 12, sm: 12, md: 4, lg: 4 },
    // "Griddle Grill": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Stock Pot Range": { xs: 12, sm: 12, md: 12, lg: 12 },
    "Chapati Roti Puffer Plate": { xs: 12, sm: 12, md: 8, lg: 8 },
    "Exhaust Hood": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Work Table": { xs: 12, sm: 12, md: 12, lg: 12 },
    "Sink": { xs: 12, sm: 12, md: 12, lg: 12 },
    "Storage": { xs: 12, sm: 12, md: 12, lg: 12 },
    "Wash Trough": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Soiled Dish Landing Table": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Tray Cooling Rack": { xs: 12, sm: 12, md: 4, lg: 4 },
    "SS Drain Grating": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Dunnage Rack": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Hot Bain Marie": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Potato & Onion Bin": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Undercounter Refrigerator with OHS": { xs: 12, sm: 12, md: 8, lg: 8 },
    "Pickup Counter": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Platform Trolley": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Dining Table 8 Seater": { xs: 12, sm: 12, md: 8, lg: 8 },
    "Masala Trolley": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Ingredients Bin": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Bussing Cart": { xs: 12, sm: 12, md: 6, lg: 6 },
    "GN Pan Trolley": { xs: 12, sm: 12, md: 6, lg: 6 },
    "Pizza Assembly Counter": { xs: 12, sm: 12, md: 7, lg: 7 },
    "Griddle Grill": { xs: 12, sm: 12, md: 5, lg: 5 },
    "Bar Counter": { xs: 12, sm: 12, md: 7, lg: 7 },
};

// Filtering commercial products from productCategories
const commercialProducts = productCategories.find(
    (category) => category.category === "Commercial Products"
);

const CommercialProducts = () => {
    const navigate = useNavigate();

    const handleNavigateDomestic = () => {
        navigate("/domestic");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <Banners imgUrl={ImageProduct} />
            <CommonTitle title={"Commercial Products"} />
            <Grid container spacing={2} className="commercial-products-container">
                {commercialProducts.subcategories.map((subcategory, index) => {
                    const gridConfig = gridConfigurations[subcategory.subcategory];
                    return (
                        <Grid
                            key={index}
                            item
                            xs={gridConfig.xs}
                            sm={gridConfig.sm}
                            md={gridConfig.md}
                            lg={gridConfig.lg}
                            className="commercial-products-grid"
                        >

                            <Card className={subcategory.subcategory === "Work Table" ? 'commercial-products-card-table' : 'commercial-products-card'}>
                                <CardContent className="commercial-products-card-content">
                                    <h5 className="commercial-products-card-h5">
                                        {subcategory.subcategory}
                                    </h5>

                                    <div className="commercial-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
                                        {subcategory.subcategory === "Work Table" ? (
                                            <Grid
                                                container
                                                spacing={{ xs: 2, md: 3 }}
                                                columns={{ xs: 4, sm: 8, md: 12 }}
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                {subcategory.products.map((product, productIndex) => (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={12}
                                                        md={4}
                                                        lg={4}
                                                        key={productIndex}
                                                    >
                                                        <div className="commercial-products-card-image">
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.alt || product.name}
                                                                    className="commercial-work-table"
                                                                />
                                                            </div>
                                                            <h6 className="commercial-products-card-h6">
                                                                {product.name}
                                                            </h6>
                                                        </div>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        ) : (
                                            subcategory.products.map((product, productIndex) => (
                                                <div
                                                    key={productIndex}
                                                    className="commercial-products-card-image"
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.alt || product.name}
                                                        className="commercial-products-single-burner"
                                                    />
                                                    <h6 className="commercial-products-card-h6">
                                                        {product.name}
                                                    </h6>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
                <ExploreButton handleNavigateDomestic={handleNavigateDomestic} />
            </Grid>
        </>
    );
};

export default CommercialProducts;
