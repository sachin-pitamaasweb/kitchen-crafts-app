import React from "react";

import "./style.css";

const FooterContact = ({mobileView}) => {
    return (
        <>
            <div className={mobileView ? "footer-contact-mobile" : "footer-contact"}>
                <div className={mobileView ? "footer-contact-div-mobile" : "footer-contact-div"}>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"}  >
                        <img src={require("../../assets/icons/phone.png")} alt="phone" className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"} />
                        <h5 className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"} 
                        style={{cursor: "pointer"}}
                        onClick={() => window.open("tel:+919580727748", "_blank")}>+91 9580727748</h5>
                    </div>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"}  >
                        <img src={require("../../assets/icons/email.png")} alt="phone" className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"}/>
                        <h5 
                        className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"}
                        style={{cursor: "pointer"}}
                        onClick={() => window.open("mailto:info.kitchencraft@gmail.com", "_blank")}>info.kitchencraft@gmail.com</h5>
                    </div>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"}  >
                        <img src={require("../../assets/icons/location.png")} alt="phone"  className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"} />
                        <h5
                         className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"}
                         style={{cursor: "pointer"}}
                         onClick={() => window.open("https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3174981,82.986583,15z/data=!4m5!3m4!1s0x0:0x4c8b9e9b7f7c4f5!8m2!3d25.3174981!4d82.986583", "_blank")}>Varanasi, India</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterContact;