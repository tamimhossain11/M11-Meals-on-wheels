import Iframe from "react-iframe";
import { callicon, emailicon, herobg2, callus } from "../assets";
import FormContact from "../components/forms/FormContact";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

import "./css/ContactPage.css";

const ContactPage = () => {
  return (
    <Layout>
      <div className="hero animate__animated animate__fadeIn">
        <img src={herobg2} alt="hero" />
        <h1>Contact Us</h1>
      </div>
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          bis_skin_checked="1"
        >
          <div
            className="col-10 col-sm-8 col-lg-6 animate__animated animate__bounceInRight"
            bis_skin_checked="1"
          >
            <FormContact />
          </div>
          <div
            className="col-lg-6 animate__animated animate__bounceInLeft"
            bis_skin_checked="1"
          >
             
                 <div className="flex flex-col space-y-5 p-5 border shadow bg-black-200 text-lg">
              <div className="text-center space-y-2">
                <i className="fa-sharp fa-solid fa-location-dot text-4xl" />
                <p>Location - 07/C Mount LV road, Kandy Sri Lanka</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-regular fa-envelope text-4xl" />
                <p>merrymeal@business.email.com</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-solid fa-phone text-4xl" />
                <p>+94742269976</p>
              </div>
              <div className="foodban animate__animated animate__fadeIn">
           
    
      </div>
            </div>
            
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default ContactPage;
