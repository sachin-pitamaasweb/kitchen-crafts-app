import React from "react";

import Title from "../../common/Title/index";

//Styles
import "./style.css";

const WriteUs = () => {
    return (
        <>
              <div className="write-us-container">
                <Title title="Write Us" className="write-us-title" />
                <form className="write-us-form"  >
                  <div className="write-us-div-input-1">
                    <input
                     type="text"
                     className="write-us-input"
                     placeholder="First Name"
                     
                     
                    />
                     <input
                     type="text"
                     className="write-us-input"
                     placeholder="Last Name"
                     
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Phone No"
                     
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Email Address"
                     
                     
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <textarea
                     type="text"
                     className="write-us-input-1"
                     placeholder="Message"
                     rows={4}
                     
                     
                    />
                  </div>
                  <div className="write-us-div-input-2"  >
                    <button className="write-us-button">Submit</button>
                  </div>
                </form>
              </div>
        </>
    )
}
export default WriteUs;