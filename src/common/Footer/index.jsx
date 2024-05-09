import React from "react";
import { useLocation } from "react-router-dom";

import FooterLogo from "./FooterLogo";

// component
import SocialIcons from "../../component/SocialIcons/index.jsx";
import QuickLinks from "../../component/QuickLink/index.jsx";
import FooterContact from "../../component/FooterContact/index.jsx";

// styles
import './style.css';

const Footer = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    return (
        <>
            <footer className="footer">
                <div className="footer-div-image">
                    <img src={require('../../assets/logo/footer-up-image.png')} alt="logo" className="footer-up-image" />
                    {isAboutPage && (
                        <div className="footer-image"   >
                            <img src={require("../../assets/About/our-mission-footer.png")} alt="footer" className="our-mission-footer" />
                        </div>
                    )}
                </div>
                <div className="footer-div-logo-icons">
                    <FooterLogo />
                    <SocialIcons />
                    <QuickLinks />
                    <FooterContact />
                </div>
            </footer>
        </>
    )
}
export default Footer;