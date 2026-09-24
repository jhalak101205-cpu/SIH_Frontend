import React from 'react';
import { ShieldCheck, Lock, Server, Cloud, FileCheck, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function TrustSection({ onLaunchDemo }) {
  const complianceBadges = [
    {
      title: 'MeghRaj (GI Cloud)',
      desc: 'Hosted on Ministry of Electronics & IT Tier-IV Sovereign Cloud Infrastructure',
      icon: <Cloud size={24} className="badge-icon" />
    },
    {
      title: 'GIGW 3.0 Certified',
      desc: 'Meets Guidelines for Indian Government Websites AA accessibility & UX standards',
      icon: <FileCheck size={24} className="badge-icon" />
    },
    {
      title: '100% Data Sovereignty',
      desc: 'Zero foreign cloud routing; all geospatial telemetry stays within sovereign borders',
      icon: <Server size={24} className="badge-icon" />
    },
    {
      title: 'CERT-In Audited',
      desc: 'End-to-end encrypted departmental communications and role-based cryptographic access',
      icon: <ShieldCheck size={24} className="badge-icon" />
    }
  ];

  const departmentIntegrations = [
    'Survey of India (SOI)',
    'ISRO Bhuvan Geo-Portal',
    'Department of Land Resources (DoLR)',
    'Tamil Nadu State Remote Sensing Application Centre (TRSAC)',
    'Directorate of Town & Country Planning (DTCP)',
    'National Informatics Centre (NIC)'
  ];

  return (
    <section className="trust-section-wrapper">
      <div className="trust-container">
        
        {/* Header */}
        <div className="trust-header-block">
          <div className="pill-category">
            <span className="pill-dot" />
            <span>Sovereign Security & Public Sector Scale</span>
          </div>
          <h2 className="trust-main-heading">
            Enterprise-Grade Land Intelligence Trusted by State & Central Ministries
          </h2>
          <p className="trust-sub-heading">
            Built following Rocket.Chat's open standards architecture, engineered for sovereign security, 
            inter-departmental federated access, and zero data leakage.
          </p>
        </div>

        {/* 4 Compliance Cards Grid */}
        <div className="compliance-grid">
          {complianceBadges.map((badge, idx) => (
            <div key={idx} className="compliance-card">
              <div className="compliance-icon-wrap">
                {badge.icon}
              </div>
              <h3 className="compliance-card-title">{badge.title}</h3>
              <p className="compliance-card-desc">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Inter-Departmental Federation Banner */}
        <div className="federation-banner">
          <div className="banner-left">
            <span className="banner-badge">Unified National Geospatial Stack</span>
            <h3 className="banner-title">Connected with Sovereign Data Gateways</h3>
            <p className="banner-text">
              Seamless synchronization with cadastral repositories, drone orthophoto feeds, and satellite registries across:
            </p>
            <div className="dept-tags-wrap">
              {departmentIntegrations.map((dept, index) => (
                <span key={index} className="dept-tag">
                  <CheckCircle2 size={13} className="check-icon" />
                  {dept}
                </span>
              ))}
            </div>
          </div>

          <div className="banner-right">
            <div className="stat-highlight-box">
              <span className="stat-big-val">94%</span>
              <span className="stat-tag-text">Tamil Nadu Land Records Digitized</span>
              <span className="stat-sub">38 Districts · 3.2 Crore Land Parcels</span>
              <button className="btn-banner-action" onClick={onLaunchDemo}>
                <span>Explore Live Metrics</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
