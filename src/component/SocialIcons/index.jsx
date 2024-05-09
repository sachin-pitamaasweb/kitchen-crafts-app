import React from "react";

import "./style.css";

const SocialIcons = ({ mobileView }) => {
  const socialIcons = [
    { src: require("../../assets/icons/facebook.png"), alt: "Facebook" },
    { src: require("../../assets/icons/instagram.png"), alt: "Instagram" },
    { src: require("../../assets/icons/twitter.png"), alt: "Twitter" },
  ];
  return (
    <div className="social-icons">
      <div className={mobileView ? "social-icons-div-mobile" : "social-icons-div"}>
        {socialIcons.map((icon, index) => (
          <img
            src={icon.src}
            alt={icon.alt}
            className={
              mobileView ? "social-icons-image-mobile" : "social-icons-image"
            }
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        ))}
      </div>
    </div>
  )
}

export default SocialIcons;