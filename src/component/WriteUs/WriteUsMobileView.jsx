import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Title from "../../common/Title";

import './WriteUsMobileView.css';

const WriteUsMobileView = () => {
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

      const validateForm = () => {
        const { firstName, lastName, contactNo, email, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!firstName || !lastName || !contactNo || !email || !message) {
          toast.error("All fields are required.");
          return false;
        }
        if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email address.");
          return false;
        }
        if (isNaN(contactNo) || contactNo.length < 10 || contactNo.length > 10) {
          toast.error("Please enter a valid contact number.");
          return false;
        }
        return true;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
          }
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
            <div className="write-us-div-mobile" data-aos="zoom-in" data-aos-duration="500">
                <div className="write-us-h3-div-mobile">
                    <Title title="Write Us" className="write-us-title" />
                </div>
                <form className="write-us-form-mobile" onSubmit={handleSubmit}>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Phone No"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <input
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="write-us-input-div-mobile">
                        <textarea
                            type="text"
                            className="write-us-input-mobile"
                            placeholder="Message"
                            rows={4}
                             name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="write-us-btn-div-mobile"  >
                        <button className="write-us-button-mobile" type="submit">Submit</button>
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
export default WriteUsMobileView;