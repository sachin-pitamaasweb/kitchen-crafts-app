import React from "react";

import { Grid } from "@mui/material";

import './ContactInfoMobileView.css';
const ContactInfoMobileView = () => {

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
    <>
      <div container className="contact-info-container-mobile"   >
        <img src={require("../../assets/Contact/bg.png")} alt="background" className="contact-info-image-mobile" />
        <div className="contact-info-div">
          {
            contactDetails.map((detail, index) => (
              <Grid

                item
                xs={4}
                className={"contact-info-grid-mobile"}
                key={index}
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <div className="contact-info-icon-div" data-aos="zoom-in" data-aos-duration="500">
                  <img src={require(`../../assets/icons/${detail.icon}.png`)} alt={detail.text} className="contact-info-icon-mobile" />
                </div>
                <div className="contact-info-text-div" data-aos="zoom-in" data-aos-duration="500" >
                  <h5
                    className="contact-info-text-mobile"
                    onClick={() => window.open(detail.link, "_blank")}
                  >
                    {detail.text}
                  </h5>
                </div>
              </Grid>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default ContactInfoMobileView