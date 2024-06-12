import React from "react";

import './style.css';

const FeatureList = ({ title, features }) => {
    const featuresListRight = features.slice(0, 3);
    const featuresListLeft = features.slice(3);
    return (
        <>
            <div className="domestic-products-features-div">
                <div className="domestic-products-features-div-items">
                    <h5 className="domestic-products-features-h5" data-aos="zoom-in" data-aos-duration="500">{title}</h5>
                    <ul className="domestic-products-features-ul" data-aos="zoom-in" data-aos-duration="500">
                        {
                            featuresListRight.map((feature, index) => (
                                <li className="domestic-products-features-li" key={index} style={{ fontWeight: '800', textTransform: "uppercase" }}>{feature}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className="domestic-products-features-div-items">
                    <ul className="domestic-products-features-ul" id="domestic-products-features-ul-id" data-aos="zoom-in" data-aos-duration="500">
                        {
                            featuresListLeft.map((feature, index) => (
                                <li className="domestic-products-features-li" key={index} style={{ fontWeight: '800',  textTransform: "uppercase" }}>{feature}</li>
                            ))
                        }
                     
                    </ul>
                </div>
            </div>
        </>
    )
}
export default FeatureList;