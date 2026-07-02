import { Link } from "react-router-dom";
import "../Styles/Home.css";
import About from "./About.jsx";
import Tester from "./Tester.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <h1 className="hero-text">
            Natural Food is <br /> Always Healthy
          </h1>
          <Link to="/products" className="button-17" role="button">
            Order Now
          </Link>
        </div>
      </div>
      <About />
      <Tester />
      <Footer />
    </>
  );
}

export default Home;
