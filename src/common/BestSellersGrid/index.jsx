import React from "react";

//MUI
import { Grid } from '@mui/material';

import Title from "../Title";

//Styles
import "./style.css";

const BestSellersGrid = ({ title, items, className }) => {
    return (
        <>
            <Grid container className="best-seller-grid" sapcing={2}>
                <Grid item xs={12} className="best-seller-grid-text">
                    <Title title={title} />
                </Grid>
                <Grid container className="best-seller-grid-2" sapcing={2} data-aos="zoom-in" >
                    <img src={require(`../../assets/BestSellersGrid/best.png`)} className="best-seller-bg-image-1" alt="stove-bg" />
                    {items.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            lg={4}
                            md={4}
                            sm={4}
                            className="best-seller-grid-3"
                        >
                            <div className="best-seller-grid-images" data-aos="zoom-in" >
                                {/* Display the item's image */}
                               <div className="best-seller-bg-image-div" >
                               <img
                                    src={item.image}
                                    alt={item.alt || "Item"}
                                    className={className ? `best-seller-round-image-commercial-${index + 1}` : `best-seller-round-image-${index + 1}`}
                                />
                               </div>

                                {/* Optional button */}
                                <div className="best-seller-text-div">
                                    <button className="best-seller-button">
                                        {item.buttonText || "Know More"} 
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}
export default BestSellersGrid;