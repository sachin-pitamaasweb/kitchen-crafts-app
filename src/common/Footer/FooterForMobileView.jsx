
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//component

import QuickLinks from "../../component/QuickLink/index.jsx";
import SocialIcons from "../../component/SocialIcons/index.jsx";
import FooterContact from "../../component/FooterContact/index.jsx";

//styles
import './FooterForMobileView.css';

const FooterForMobileView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    const handleHome = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }
    return (
        <>
            <footer>
                <img src={require('../../assets/logo/footer-up-image.png')} alt="logo" className="footer-up-image-for-mobile" />
                <div className="footer-for-mobile">
                    <div className="logo-div-for-mobile-view">
                        <div className="footer-logo-mobile" onClick={handleHome} style={{ cursor: 'pointer' }}>
                            <img src={require('../../assets/logo/logo.png')} alt="logo" className="footer-logo-mobile-img" style={{ width: '100%' }} />
                            {isAboutPage && (
                                <div className="footer-image-for-mobile"  >
                                    <img src={require("../../assets/About/our-mission-footer.png")} alt="footer" className="our-mission-footer-mobile" />
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="footer-logo-mobile-icons">
                        <h5 className="footer-logo-mobile-h5">Follow Us</h5>
                        <SocialIcons
                            mobileView={true}
                        />
                    </div>
                    <div className="footer-logo-mobile-quick-links">
                        <QuickLinks
                            mobileView={true}
                        />
                    </div>
                    <div className="footer-logo-mobile-contact">
                        <FooterContact
                            mobileView={true}
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default FooterForMobileView;