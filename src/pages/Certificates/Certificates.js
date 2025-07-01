import React from "react";
import CertificateCard from "./CertificateCard";
import certificateData from "./CertificateData";
import { FaCertificate } from "react-icons/fa";
import "./Certificates.css";

const CertificatesPage = () => {
  return (
      <section className="certificate-section">
        <h1 className="page-title"><FaCertificate/> My Certificates and Licenses</h1>
        <p className="page-subtitle">Here is my Certificates and Achievements</p>
        <div className="card-grid">
          {certificateData.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      </section>
  );
};

export default CertificatesPage;
