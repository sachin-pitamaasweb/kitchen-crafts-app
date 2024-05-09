import React from "react";

//common
import FeatureGrid from "../../common/FeatureGrid";

import { CommercialFeaturesItems } from "../../helpers/index";

const CommercialFeatures = () => {
    return (
        <>
        
        <FeatureGrid
            title="Commercial Features"
            items={CommercialFeaturesItems} 
            />
        </>
    )
}
export default CommercialFeatures