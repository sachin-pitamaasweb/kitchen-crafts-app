import React from "react";

import './style.css';
 
const Title = ({title="KitchenCraft", className="title-h3"}) => {
    return(
        <h3 className={className} data-aos="flip-up" data-aos-duration="500">{title}</h3>
    )
}
export default Title;