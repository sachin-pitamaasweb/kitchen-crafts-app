import React from "react";
import { Grid } from "@mui/material";
import "./style.css";

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: "email",
            text: "info.kitchencraft@gmail.com",
            link: "mailto:info.kitchencraft@gmail.com",
        },
        {
            icon: "phone",
            text: "+91 9580727748",
            link: "tel:+919580727748",
        },
        {
            icon: "location",
            text: "Varanasi, India",
            link: "https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3174981,82.986583,15z/data=!4m5!3m4!1s0x0:0x4c8b9e9b7f7c4f5!8m2!3d25.3174981!4d82.986583",
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
                    sx={{
                        transition: '0.3s',
                        '&:hover': {
                            transform: 'scale(1.03)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        },

                    }}
                >
                    <div
                        className="contact-info-icon-div"
                        data-aos="zoom-in" data-aos-duration="500"
                    >
                        <img
                            src={require(`../../assets/icons/${detail.icon}.png`)}
                            alt={detail.icon}
                            className="contact-info-icon"
                        />
                    </div>
                    <div
                        className="contact-info-text-div"
                        data-aos="zoom-in" data-aos-duration="500"
                    >
                        <h5
                            className="contact-info-text"
                            onClick={() => window.open(detail.link, '_blank')}
                            style={{ cursor: 'pointer ' }}
                        >
                            {detail.text}
                        </h5>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ContactInfo;
