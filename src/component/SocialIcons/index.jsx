import React from "react";

import "./style.css";

const SocialIcons = ({ mobileView }) => {
  const socialIcons = [
    {
      src: require("../../assets/icons/facebook.png"),
      alt: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61561227300100"
    },
    {
      src: require("../../assets/icons/instagram.png"),
      alt: "Instagram",
      link: "https://www.instagram.com/kitchencraftvns/",
    },
    {
      src: require("../../assets/icons/LinkedIn.png"),
      alt: "LinkedIn",
      link: "https://www.linkedin.com/company/kitchencraftindia/",
    },
  ];
  return (
    <div className="social-icons">
      <div className={mobileView ? "social-icons-div-mobile" : "social-icons-div"}>
        {socialIcons.map((icon, index) => (
          <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
            <img
              src={icon.src}
              alt={icon.alt}
              className={
                mobileView ? "social-icons-image-mobile" : "social-icons-image"
              }
            />
          </a>
        ))}
      </div>
    </div >
  )
}

export default SocialIcons;