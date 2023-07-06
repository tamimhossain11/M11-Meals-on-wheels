import { Col, Row, Button } from "react-bootstrap";
import {
  aboutbanner,
  herobg1,
  staff1,
  staff2,
  staff3,
  cafe,
  staff4,
  banner2,
  bla,
} from "../assets";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./css/AboutPage.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className="hero animate__animated animate__fadeIn">
        <img src={aboutbanner} alt="hero" />
        <h1>About Us</h1>
      </div>
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          bis_skin_checked="1"
        >
          <div
            className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig"
            bis_skin_checked="1"
          >
            <motion.img
              src={cafe}
              className="d-block mx-lg-auto img-fluid banner rounded"
              alt="Bootstrap Themes"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          
          <div
            className="col-lg-6 animate__animated animate__fadeInLeftBig"
            bis_skin_checked="1"
          >
           
            <div className="hr-purple"></div>
           
        
             
            <p className="paraa" align="justify">
             MerryMeals has been in the family of KISH International since for many years, situated near the coastal lines of western region of Sri Lanka,
             kandy that is about half an hour drive from the commercial capital of Kandy. Being adjacent to the fishing town Negombo that boasts about the 
             freshly caught produce.<br></br>

MerryMeals is known for its authentic Sri Lankan food, Bangladeshi deliciousness and of cause the western continental blend. The world renounced
 local spices coupled with the age old techniques of the Chef, one is bound to have a scrumptious, fresh ingredient mouthwatering spread 
 for a meal. Ideally situated in the town of Wattala with ample parking spaces with soothing ambience draws more crown on both weekdays and
  weekends. It caters for both business style as well as family oriented dining experience.
            </p>
          </div>

       
        </div>
      </div>
   
     
      <div className="staff mb-5">
        <div className="container text-center py-5 animate__animated animate__fadeInUpBig">
          <h1 className="team fw-bold">
           Meet Our Team Leaders
          </h1>
       
          <Row>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff1}
                  alt="person"
                  className="staff rounded-squre"
                />
                 <h5 className="fw-bold">General Manager</h5>
                <h3 className="fw-bold py-1">Zarz Elmira</h3>
               <p align="justify"> leads the operation of the restaurants. The
Restaurant General Manager has the overall responsibility for directing the
daily operations of the restaurant, ensuring compliance with company
standards in all areas of operation, including product preparation and delivery,
customer relations, restaurant maintenance and repair, inventory
management, team management, hiring, termination and retention
of team members, financial accountability, and ensuring that the highest
quality products and services are delivered to each customer</p>
<Link to="/contact">
                <Button
                  variant="light"
                  className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                >
                  Messege
                </Button>
              </Link>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff2}
                  alt="person"
                  className="staff rounded-squre"
                />
                      <h5 className="fw-bold">Assistant Manager</h5>
                <h3 className="fw-bold py-1">Jacob Noah</h3>
                <p align="justify">Areas of responsibility include Restaurants/Bars and Room Service, if applicable. Assists in the daily supervision of 
                  restaurant operations and assists with menu planning maintaining sanitation standards and assists servers and hosts on the 
                  floor during peak meal periods. Strives to continually improve guest and employee satisfaction. Determines training needed 
                  to accomplish goals, then implements plan and a professional who is in charge of making sure that everything runs smoothly at your local restaurant</p>
                  <Link to="/contact">
                <Button
                  variant="light"
                  className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                >
                  Messege
                </Button>
              </Link>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff3}
                  alt="person"
                  className="staff rounded-squre"
                />
                 <h5 className="fw-bold"> Executive Chef</h5>
                <h3 className="fw-bold py-1">Isha Mia</h3>
                <p align="justify">Attentive chef with seven years of experience in Italian cuisine  Well-versed in managing kitchens that serve up to 
                  70 tables. Credentials include the ability to motivate staff and to ensure cohesive kitchen operations.
                   Emphasis on creating innovative dishes, using fresh, seasonal produce, and meeting a wide range of dietary limitations and Obtaining 
                   feedback on food and service quality, and handling customer problems and complaints  and Reviewing staffing levels to meet service, operational,
                    and financial objectives.</p>
                   <Link to="/contact">
                <Button
                  variant="light"
                  className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                >
                  Messege
                </Button>
              </Link>
              
               
              </motion.div>
            </Col>
           
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
