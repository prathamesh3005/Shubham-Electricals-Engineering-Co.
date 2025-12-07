// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { servicesList } from "../data/servicesData";

const Home = () => {
  return (
    <div className="page home-page">
      {/* WhatsApp floating icon */}
      <div className="whatsapp-float">
        <a href="https://wa.me/9762679127" target="_blank" rel="noreferrer">
          <img src="/img/icons8-whatsapp.gif" alt="WhatsApp" />
        </a>
      </div>

      <section className="hero-section container">
        <div className="hero-text">
          <h1>Clean Energy &amp; Reliable Electrical Solutions</h1>
          <p>
            SEE (Shubham Electricals and Engineering Co.) is a government-authorized
            company that specializes in providing top-notch electrical services and
            solar panel solutions. With prestigious vendorship from Government
            organizations like MSEB (MSEDCL), the Indian Navy base, and GeM, SEE has
            a proven track record of successfully executing tendering projects.
          </p>
          <p>
            With a focus on quality, reliability, and sustainability, SEE has
            expanded its business into the private sector as well by offering
            comprehensive electrical services and innovative solar panel implementation
            and maintenance. With a team of skilled professionals and a commitment to
            excellence, SEE is a trusted partner for clients seeking efficient and
            eco-friendly electrical solutions.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/solar.jpg" alt="Solar Panels" />
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Key Solutions</h2>
        <div className="cards-grid">
          {servicesList.map((s) => (
            <article key={s.slug} className="card">
              <img src={s.image} alt={s.title} className="card-image" />
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
                <Link to={`/services/${s.slug}`} className="card-link">
                  Read more &raquo;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-us-text">
            <p>
              1. <strong>Expertise:</strong> Benefit from our extensive knowledge and
              experience in the industry. Our team of skilled professionals has a
              proven track record of delivering successful projects and providing
              exceptional services.
            </p>
            <p>
              2. <strong>Comprehensive Solutions:</strong> We offer a complete range
              of services, from supply and installation to maintenance and
              liasoning, ensuring all your electrical and solar needs are covered.
            </p>
            <p>
              3. <strong>Quality &amp; Reliability:</strong> We prioritize quality
              in every project, using reliable materials and following industry best
              practices to deliver long-lasting solutions.
            </p>
            <p>
              4. <strong>Sustainability:</strong> Our solar services and energy
              solutions are designed to promote clean and sustainable energy usage.
            </p>
            <p>
              5. <strong>Compliance:</strong> As a licensed electrical contractor, we
              strictly adhere to statutory regulations, safety standards and grid
              codes.
            </p>
            <p>
              6. <strong>Exceptional Customer Service:</strong> We prioritize
              responsiveness, reliability, and clear communication throughout your
              project. Our goal is to exceed your expectations and build lasting
              relationships with our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
