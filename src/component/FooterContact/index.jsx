import React from "react";

import "./style.css";

const FooterContact = ({mobileView}) => {
    return (
        <>
            <div className={mobileView ? "footer-contact-mobile" : "footer-contact"}>
                <div className={mobileView ? "footer-contact-div-mobile" : "footer-contact-div"}>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"} data-aos="zoom-in" data-aos-duration="1000">
                        <img src={require("../../assets/icons/phone.png")} alt="phone" className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"} />
                        <h5 className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"}>+91 9999999999</h5>
                    </div>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"} data-aos="zoom-in" data-aos-duration="1000">
                        <img src={require("../../assets/icons/email.png")} alt="phone" className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"}/>
                        <h5 className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"}>xyz@gmail,com</h5>
                    </div>
                    <div className={mobileView ? "footer-contact-image-div-mobile" : "footer-contact-image-div"} data-aos="zoom-in" data-aos-duration="1000">
                        <img src={require("../../assets/icons/location.png")} alt="phone"  className={mobileView ? "footer-contact-image-mobile" : "footer-contact-image"} />
                        <h5 className={mobileView ? "footer-contact-h5-mobile" : "footer-contact-h5"}>Location</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterContact;