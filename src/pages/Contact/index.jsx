import React from "react";


//MUI 
import { useMediaQuery, useTheme } from "@mui/material";

//common
import Banners from "../../common/Banners";

//component
import LocateUs from '../../component/LocateUs'
import WriteUs from "../../component/WriteUs";
import ContactInfo from "../../component/ContactInfo";

import WriteUsMobileView from "../../component/WriteUs/WriteUsMobileView.jsx";
import ContactInfoMobileView from "../../component/ContactInfo/ContactInfoMobileView.jsx";

//styles
import "./style.css";



const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Banners
        imgUrl={require("../../assets/banner/contact-banner.png")}
      />
      {
        matches ? <ContactInfo /> : <ContactInfoMobileView />
      }
      {
        matches ? <div className="write-us-div"><WriteUs /></div> : <WriteUsMobileView />
      }
      <LocateUs />
    </>
  )
}
export default Contact;