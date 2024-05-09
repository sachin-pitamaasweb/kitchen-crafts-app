import React from "react";
import { useNavigate } from "react-router-dom";

import { navLinks } from "../../helpers";

import "./style.css";

const QuickLinks = ({ mobileView }) => {
    const navigate = useNavigate();
    const handleClick = (value) => {
        window.scrollTo(0, 0);
        navigate(value);
    }
    return (
        <>
            <div className={mobileView ? "quick-links-div-mobile" : "quick-links"}>
                <div
                    className="quick-links-div"
                    
                    
                >
                    {
                        navLinks.map((item, index) => (
                            <p
                                className={mobileView ? "quck-links-p-mobile" : "quck-links-p"}
                                key={index}
                                onClick={() => handleClick(item.to)}
                            >
                                {item.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default QuickLinks;


