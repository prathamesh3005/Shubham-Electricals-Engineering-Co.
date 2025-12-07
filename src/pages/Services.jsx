// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { servicesList } from "../data/servicesData";

const Services = () => {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Our Services</h1>
        <p>
          From solar EPC and O&amp;M to transformer substations, RCC pipes and
          liasoning work, SEE delivers end-to-end electrical and renewable
          solutions.
        </p>
      </header>

      <div className="cards-grid">
        {servicesList.map((s) => (
          <article key={s.slug} className="card">
            <img src={s.image} alt={s.title} className="card-image" />
            <div className="card-body">
              <h2>{s.title}</h2>
              <p>{s.shortDescription}</p>
              <div className="card-meta">{s.category}</div>
              <Link to={`/services/${s.slug}`} className="card-link">
                Read more &raquo;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
