import React from "react";

import Title from "../../common/Title/index";

//Styles
import "./style.css";

const WriteUs = () => {
    return (
        <>
              <div className="write-us-container">
                <Title title="Write Us" className="write-us-title" />
                <form className="write-us-form" data-aos="zoom-in" >
                  <div className="write-us-div-input-1">
                    <input
                     type="text"
                     className="write-us-input"
                     placeholder="First Name"
                     data-aos="zoom-in"
                     
                    />
                     <input
                     type="text"
                     className="write-us-input"
                     placeholder="Last Name"
                     data-aos="zoom-in"
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Phone No"
                     data-aos="zoom-in"
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Email Address"
                     data-aos="zoom-in"
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <textarea
                     type="text"
                     className="write-us-input-1"
                     placeholder="Message"
                     rows={4}
                     data-aos="zoom-in"
                     
                    />
                  </div>
                  <div className="write-us-div-input-2" data-aos="zoom-in" >
                    <button className="write-us-button">Submit</button>
                  </div>
                </form>
              </div>
        </>
    )
}
export default WriteUs;