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
                <form className="write-us-form-mobile" data-aos="zoom-in" >
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="First Name"
                            data-aos="zoom-in"
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Last Name"
                            data-aos="zoom-in"
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Phone No"
                            data-aos="zoom-in"
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Email Address"
                            data-aos="zoom-in"
                           
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <textarea
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Message"
                            rows={4}
                            data-aos="zoom-in"
                           
                        />
                    </div>
                    <div className="write-us-btn-div-mobile"  data-aos="zoom-in">
                        <button className="write-us-button-mobile">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default WriteUsMobileView;