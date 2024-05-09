import React from "react";
import { Grid } from "@mui/material";
import "./style.css";

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: "email",
            text: "xyz@gmail.com",
        },
        {
            icon: "phone",
            text: "+91 9999-9999",
        },
        {
            icon: "location",
            text: "Location",
        },
    ];
    
    return (
        <Grid container className="contact-info-container" spacing={2}  >
            {/* Background Image */}
            <Grid item xs={12}>
                <img
                    src={require("../../assets/Contact/bg.png")}
                    className="contact-info-image"
                    alt="background"
                />
            </Grid>

            {/* Dynamic Contact Information */}
            {contactDetails.map((detail, index) => (
                <Grid
                    key={index}
                    item
                    xs={12}
                    lg={4}
                    md={4}
                    sm={12}
                    className={index === 1 ? "contact-info-grid" : "contact-info-grid-last"}
                      
                >
                    <div className="contact-info-icon-div">
                        <img
                            src={require(`../../assets/icons/${detail.icon}.png`)}
                            alt={detail.icon}
                            className="contact-info-icon"
                        />
                    </div>
                    <div className="contact-info-text-div">
                        <h5 className="contact-info-text">
                            {detail.text}
                        </h5>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ContactInfo;
