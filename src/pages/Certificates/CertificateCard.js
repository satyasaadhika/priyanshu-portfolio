import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="card">
      <img src={certificate.image} alt={certificate.name} className="card-image" />
      <div className="card-content">
        <h2>{certificate.name}</h2>
        <p><strong>Issued by:</strong> {certificate.issuer}</p>
        <p><strong>Grade:</strong> {certificate.grade}</p>
        <p><strong>Skills:</strong> {certificate.skills}</p>
        <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="view-btn">
          View Certificate <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
