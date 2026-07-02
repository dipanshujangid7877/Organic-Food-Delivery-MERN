import { useMemo, useState } from "react";
import "../Styles/Signin.css";
import signImage from "../assets/asset2.jpeg";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtjEDfeP0OXkmX2Ofyvssnno2ZBcusIrA",
  authDomain: "food-1ec3f.firebaseapp.com",
  projectId: "food-1ec3f",
  storageBucket: "food-1ec3f.appspot.com",
  messagingSenderId: "382920070563",
  appId: "1:382920070563:web:09bf43bd43cd7358547616",
};

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    location: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useMemo(() => {
    const app = initializeApp(firebaseConfig);
    return getAuth(app);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch {
      setMessage("Google sign in could not be completed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/registor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsonData = await response.json();
      setMessage(jsonData.message || "Account created");

      if (response.ok && jsonData.success) {
        setTimeout(() => navigate("/login"), 600);
      }
    } catch {
      setMessage("Backend is offline. Please start the server and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="sign-container">
      <section className="sign-form">
        <h1>Create Account</h1>
        <p>Join CravHealthy and order fresh meals faster.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {message && <p className="form-message">{message}</p>}
          <div className="Submit-group">
            <button type="submit" className="sign-in-button" disabled={loading}>
              {loading ? "Creating..." : "Sign Up"}
            </button>
            <GoogleButton onClick={handleSignInWithGoogle} />
          </div>
        </form>
      </section>
      <div className="sign-image">
        <img src={signImage} alt="Fresh food basket" />
      </div>
    </main>
  );
}

export default Signin;
