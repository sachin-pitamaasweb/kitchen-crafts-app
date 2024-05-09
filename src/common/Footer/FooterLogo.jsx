import React from "react";

import './FooterLogo.css';

const FooterLogo = () => {
 return(
    <>
    <div className="footer-logo-div" data-aos="zoom-in" data-aos-duration="1000">
        <img src={require('../../assets/logo/logo.png')} alt="logo" className="footer-logo" />
    </div>
    </>
 )   
}
export default FooterLogo