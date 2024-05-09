import React from "react";

//MUI 
import { Grid } from "@mui/material";

import Title from "../../common/Title/index";

//Styles
import "./style.css";

const AboutText = () => {
    return (
        <>
            <Grid container className="about-text-container" spacing={2}>
                <Grid item xs={12} className="about-text-grid">
                    <Title title="About Us" />
                    <p className="about-text-p" >
                        KitchenCraft, a private Indian company established in 2018 with deep roots dating back to 1982 in the emerging LPG sector across India,
                        envisions establishing the brand "KitchenCraft" as the benchmark in the small and medium household appliances industry in India.
                        This vision is impeccably reflected in their products, crafted with precision at their technologically advanced manufacturing facility.
                        All products are meticulously manufactured in-house, ensuring high quality, top-notch performance, and affordability.
                        KitchenCraft's products enjoy widespread demand due to their user-friendly operations and extended functional lifespan.
                    </p>
                    <p className="about-text-p" >
                        At its inception, KitchenCraft faced skepticism regarding the potential of the gas stoves sector to bring about significant results. However,
                        over the years, KitchenCraft has not only built a thriving business but also demonstrated that gas stoves can create substantial social,
                        financial, and environmental benefits.
                    </p>
                    <p className="about-text-p" >
                        For KitchenCraft, quality is paramount. The company has been an SIO 901 certified entity since its inception and adheres strictly to the
                        standards outlined in SI 4246 by The Bureau of Indian Standards in manufacturing its products.
                    </p>
                </Grid>
            </Grid>
        </>
    )
}
export default AboutText