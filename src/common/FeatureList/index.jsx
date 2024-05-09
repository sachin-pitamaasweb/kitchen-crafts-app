import React from "react";

import './style.css';

const FeatureList = ({ title, features }) => {
    const featuresListRight = features.slice(0, 3);
    const featuresListLeft = features.slice(3);
    return (
        <>
            <div className="domestic-products-features-div">
                <div className="domestic-products-features-div-items">
                    <h5 className="domestic-products-features-h5" data-aos="zoom-in" data-aos-duration="1000">{title}</h5>
                    <ul className="domestic-products-features-ul">
                        {
                            featuresListRight.map((feature, index) => (
                                <li className="domestic-products-features-li" key={index} data-aos="zoom-in" data-aos-duration="1000">{feature}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className="domestic-products-features-div-items">
                    <ul className="domestic-products-features-ul" id="domestic-products-features-ul-id">
                        {
                            featuresListLeft.map((feature, index) => (
                                <li className="domestic-products-features-li" key={index}  data-aos="zoom-in" data-aos-duration="1000">{feature}</li>
                            ))
                        }
                     
                    </ul>
                </div>
            </div>
        </>
    )
}
export default FeatureList;