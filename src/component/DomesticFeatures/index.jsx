import React from "react";

//common
import FeatureGrid from "../../common/FeatureGrid";

//Helper
import { DomesticFeaturesItems } from "../../helpers/index";

const DomesticFeatures = () => {
    return (
        <>
            <FeatureGrid
            title="Domestic Features"
            items={DomesticFeaturesItems} 
            />
        </>
    )
}
export default DomesticFeatures