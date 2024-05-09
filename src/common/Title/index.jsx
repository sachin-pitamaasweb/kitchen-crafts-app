import React from "react";

import './style.css';
 
const Title = ({title="KitchenCraft", className="title-h3"}) => {
    return(
        <h3 className={className}  >{title}</h3>
    )
}
export default Title;