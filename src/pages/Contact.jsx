// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email service or backend API
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with SEE for electrical projects, solar solutions, and
          liasoning work.
        </p>
      </header>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message / requirement"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h2>Office</h2>
          <p>Pune, Maharashtra</p>
          <p>Email: example@example.com</p>
          <p>Phone: 9762679127 / 8888669127</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
