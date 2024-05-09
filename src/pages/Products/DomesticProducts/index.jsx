import React from "react";

import CommonTitle from "../CommonTitle";
import Banners from "../../../common/Banners";


import OrbitRange from "../../../component/OrbitRange/index.jsx";
import SpectraRange from "../../../component/SpectraRange/index.jsx";
import PremiumRange from "../../../component/PremiumRange/index.jsx";
import TrinityRange from "../../../component/TrinityRange/index.jsx";
import ReflectoRange from "../../../component/ReflectoRange/index.jsx";
import SignatureRange from "../../../component/SignatureRange/index.jsx";
import SingleBurnerRange from '../../../component/SingleBurnerRange/index.jsx';
import TheCompatibilityRange from "../../../component/TheCompatibilityRange/index.jsx";

import ProductImage from "../../../assets/banner/product-banner.svg";

import './style.css';

const DomesticProducts = () => {

    return (
        <>
            <Banners
                imgUrl={ProductImage}
            />
            <CommonTitle
                title={"Domestic Products"}
            />
            <SingleBurnerRange />
            <TheCompatibilityRange />
            <SignatureRange />
            <OrbitRange />
            <PremiumRange />
            <TrinityRange />
            <SpectraRange />
            <ReflectoRange />
        </>
    )

}
export default DomesticProducts;


