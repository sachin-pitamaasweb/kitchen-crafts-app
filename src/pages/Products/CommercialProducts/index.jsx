import React from "react";
import { useNavigate } from "react-router-dom";
import Banners from "../../../common/Banners";
import CommonTitle from "../CommonTitle";
import { Card, CardContent, Grid } from "@mui/material";

import { productCategories } from "../../../helpers/index";

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
    "Griddle Grill": { xs: 12, sm: 12, md: 4, lg: 4 },
    "Stock Pot Range": { xs: 12, sm: 12, md: 8, lg: 8 },
    "Chapati Roti Puffer Plate": { xs: 12, sm: 12, md: 8, lg: 8 },
};

// Filtering commercial products from productCategories
const commercialProducts = productCategories.find(
    (category) => category.category === "Commercial Products"
);

const CommercialProducts = () => {
    const navigate = useNavigate();  

    const handleNavigateDomestic = () => {
        navigate("/products/domestic");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <Banners
                imgUrl={ImageProduct}
            />
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
                            <Card className="commercial-products-card">
                                <CardContent className="commercial-products-card-content">
                                    <h5 className="commercial-products-card-h5">
                                        {subcategory.subcategory}
                                    </h5>
                                    <div className="commercial-products-card-image-div" data-aos="zoom-in" data-aos-duration="500">
                                        {subcategory.products.map((product, productIndex) => (
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
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
                <Grid item xs={12} sm={12} md={4} lg={4} className="commercial-products-grid"  >
                    <Card className="commercial-products-card">
                        <CardContent className="commercial-products-card-content-explore">
                            <div className="commercial-products-card-content-div"  >
                                <h4 className="commercial-products-card-h4">Explore <br />Domestic Range</h4>
                                <img
                                    src={require("../../../assets/Products/CommercialRange/arrow.png")}
                                    alt="arrow"
                                    className="commercial-products-arrow"
                                    onClick={handleNavigateDomestic}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default CommercialProducts;


