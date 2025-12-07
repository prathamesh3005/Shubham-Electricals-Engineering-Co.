// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesList } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="page container">
        <h1>Service not found</h1>
        <Link to="/services" className="btn btn-primary">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="page container">
      <header className="page-header">
        <h1>{service.title}</h1>
        <p>{service.shortDescription}</p>
      </header>

      <div className="detail-layout">
        <div className="detail-text">
          {service.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <aside className="detail-aside">
          <img src={service.image} alt={service.title} className="detail-image" />
          <p className="detail-category">{service.category}</p>
          <Link to="/services" className="btn btn-outline">
            Back to Services
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetail;
