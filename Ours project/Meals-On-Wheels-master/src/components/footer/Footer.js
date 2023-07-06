import { Link } from "react-router-dom";
import { fb, ig, tw, yt } from "../../assets";
import "./Footer.css";
import { logo} from "../../assets";

const Footer = () => {
  const link = "test";

  return (
    <footer>
      <div>
   

        <div className="footer">
          <div className="container" bis_skin_checked="1">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-white">
              <div className="col mb-3" bis_skin_checked="1">
              <img src={logo} alt="" />
                <h3>Merry Meals</h3>
              
                
              </div>

              <div className="col mb-3" bis_skin_checked="1"></div>

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Important Links</h5>
                <ul className="nav flex-column">
                <Link to="/about" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      About Us
                    </li>
                  </Link>
                  <Link to="/contact" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                     Contact Us
                    </li>
                  </Link>
                  <Link to="/terms" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      terms & Conditions
                    </li>
                  </Link>
                 
                  <Link to="/donate" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Donate
                    </li>
                  </Link>
                  <Link to="/partnership" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Partnership
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Partners Information</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      ABC Partners
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                     XYZ Partners
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      AAA Partners
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                     ACC Partners
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                    
                    </a>
                  </li>
                </ul>
              </div>

             

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Social Media</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      MeerMeals.com
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      Instagram
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                     Gmail
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      YouTube
                    </a>
                  </li>
                </ul>
                
              </div>
             
            </footer>
            
          </div>
        </div>
      </div>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
          MerryMeals
        </a>
      </div>
    </footer>
  );
};

export default Footer;
