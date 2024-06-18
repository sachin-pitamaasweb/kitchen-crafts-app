import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

import Title from "../../common/Title/index";

//Styles
import "./style.css";

const WriteUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const serviceId = "service_xbpym29"; 
    const templateId = "template_l9v3dmj";
    const userId = "8sj2D8HPFXExHcvPb";

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactNo: formData.contactNo,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      console.log("Email sent successfully:", response);

      // Show success toast notification
      toast.success("Form submitted successfully!");

      // Clear form data after submission
      setFormData({
        firstName: "",
        lastName: "",
        contactNo: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

    return (
        <>
              <div className="write-us-container" data-aos="zoom-in" data-aos-duration="500">
                <Title title="Write Us" className="write-us-title" />
                <form className="write-us-form" onSubmit={handleSubmit}>
                  <div className="write-us-div-input-1">
                    <input
                     type="text"
                     className="write-us-input"
                     placeholder="First Name"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                    />
                     <input
                     type="text"
                     className="write-us-input"
                     placeholder="Last Name"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Contact No"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <input
                     type="text"
                     className="write-us-input-1"
                     placeholder="Email Address"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                    />
                  </div>
                  <div className="write-us-div-input-2">
                  <textarea
                     type="text"
                     className="write-us-input-1"
                     placeholder="Message"
                     name="message"
                     rows={4}
                     value={formData.message}
                     onChange={handleChange}
                    />
                  </div>
                  <div className="write-us-div-input-2"  >
                    <button className="write-us-button" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              
              />
        </>
    )
}
export default WriteUs;