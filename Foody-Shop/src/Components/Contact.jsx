import { useState } from "react";
import "../Styles/Contact.css";
import contactImage from "../assets/contact.png";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <h3>Home / Contact page</h3>
      </section>
      <section className="contact-form">
        <div className="contact-form-input">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message" rows="5" required />
            </div>
            {sent && <p className="form-message">Thanks, we will contact you soon.</p>}
            <div className="Submit-group">
              <button type="submit" className="submit-in-button">
                Get in Touch
              </button>
            </div>
          </form>
        </div>
        <div className="contact-form-image">
          <img src={contactImage} alt="Customer support" />
        </div>
      </section>
    </main>
  );
}

export default Contact;
