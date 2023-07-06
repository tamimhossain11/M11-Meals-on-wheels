import { Button, Col, Row } from "react-bootstrap";
import {
  banner1,
  banner2,
  banner4,
  botwave,
  logo,
  herobg2,
  topwave,
  un,
  unicef,
  who,
} from "../assets";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

import "./css/HomePage.css";

const HomePage = () => {
  return (
    <Layout>
       <div className="un animate__animated animate__fadeIn">
        <img src={un} alt="un" />
        <h1 className="fresh display-5 fw-bold lh-1 mb-3 ">PREPARED FRESH <br></br> DELIVERED WITH LOVE</h1>
      </div>
      <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url(/bannerimage.jpg)",}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Requesting Partners to join with us is just one click away </h1>
              <h4 className='mb-3'>Be a helping partner of Merry meals and be the reason to provide foods to helpless peoples
              Feed the peoples who is living as unable.</h4>
              <a className='btn btn-outline-light btn-lg'  href="/partnership" role='button'>
                Register as a partner Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

     
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          bis_skin_checked="1"
        >
          <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig position-relative">
            <motion.img
              src={banner1}
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
            <h1 className="display-5 fw-bold lh-1 mb-3 ">
            Giving your hunger a safer, faster and better alternative
            </h1>
            
            <p className="para">
            Craving chicken Biryani, a yummy Panini or maybe something Japanese? Your favourite dishes can now be ordered and delivered right to your doorstep 
            through this platform. Go ahead and place an order to satisfy your taste buds in the comfort of your home.
            </p>
            <Link to="/donate">
                <Button
                  variant="light"
                  className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                >
                  Donate Us
                </Button>
              </Link>
          </div>

        </div>
      </div>
    
    </Layout>
  );
};

export default HomePage;
