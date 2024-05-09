import React from "react";
import Title from "../../common/Title";

import './WriteUsMobileView.css';

const WriteUsMobileView = () => {
    return (
        <>
            <div className="write-us-div-mobile">
                <div className="write-us-h3-div-mobile">
                    <Title title="Write Us" className="write-us-title" />
                </div>
                <form className="write-us-form-mobile"  >
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="First Name"
                            
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Last Name"
                            
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Phone No"
                            
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Email Address"
                            
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <textarea
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Message"
                            rows={4}
                            
                           
                        />
                    </div>
                    <div className="write-us-btn-div-mobile"  >
                        <button className="write-us-button-mobile">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default WriteUsMobileView;