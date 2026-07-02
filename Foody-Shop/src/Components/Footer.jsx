import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import phonepe from "../assets/phone.jpeg";
import gpay from "../assets/gpay.jpeg";
import paytm from "../assets/paytm.jpeg";
import visa from "../assets/visa.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-heading">
        <div className="footer-header">
          <h2>CravHealthy</h2>
        </div>
        <div className="subscribe-div">
          <div className="email-input-div">
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="subscribe-button">
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className="footer-items">
        <div className="address">
          <h5>Address</h5>
          <div className="line-div"></div>
          <div className="address-details">
            <p>Alwar-Tijara-Delhi Highway</p>
            <p>Chikani, Alwar, Rajasthan</p>
            <p>India - 301028</p>
          </div>
        </div>
        <div className="quicklinks">
          <h5>Quick Links</h5>
          <div className="line-div"></div>
          <div className="quicklinks-items">
            <Link to="/">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="updates">
          <h5>Contact</h5>
          <div className="line-div"></div>
          <div className="contact-details">
            <p>Email: cravhealthy@gmail.com</p>
            <p>Phone No: 1234567890</p>
            <p>Payment Accepted</p>
            <div className="contact-image">
              <img src={phonepe} alt="phonepe" />
              <img src={gpay} alt="gpay" />
              <img src={paytm} alt="paytm" />
              <img src={visa} alt="visa" />
            </div>
          </div>
        </div>
      </div>
      <div className="line-div"></div>
    </footer>
  );
}

export default Footer;
