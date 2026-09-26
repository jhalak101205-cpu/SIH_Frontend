import React from 'react';
import { NationalEmblem } from '../components/Emblem';
import { IsometricDigitalTwin, IsometricGeospatialPlatform } from '../components/IsometricIllustrations';
import { 
  BookOpen, Lock, ArrowRight, CheckCircle2
} from 'lucide-react';

export function HomePage({
  onOpenSignIn,
  onOpenUserManual,
  onNavigate
}) {
  return (
    <div className="simple-landing-page">
      
      {/* 1. HERO SECTION: Clean, Dignified Project Overview */}
      <section className="simple-hero-section" id="hero">
        <div className="simple-container">
          


          <h1 className="hero-main-title">
            BhumiNexus
            <span className="hero-hindi-sub"> (भूमि नेक्सस)</span>
          </h1>

          <h2 className="hero-sub-title">
            National Digital Platform for Research, Policy Innovation & Evidence-Based Land Governance
          </h2>

          <p className="hero-summary-paragraph">
            A unified, intelligent knowledge-to-policy engine developed for the <strong>Department of Land Resources (DoLR), Ministry of Rural Development</strong>. 
            Bridging fragmented cadastral maps and administrative revenue records into actionable policy evaluations with zero hallucinations.
          </p>

          <div className="hero-buttons-row">
            <a href="#dual-portals" className="btn-primary-simple">
              <span>Explore Platform Gateways</span>
              <ArrowRight size={18} />
            </a>

            <button type="button" className="btn-secondary-simple" onClick={onOpenUserManual}>
              <BookOpen size={18} />
              <span>Project Architecture & Manual</span>
            </button>
          </div>

          {/* 4 Impact Stat Cards */}
          <div className="hero-stats-row">
            <div className="stat-card">
              <span className="stat-num">94%</span>
              <span className="stat-label">Records Digitised</span>
              <span className="stat-sub">National DILRMP saturation</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">38,500</span>
              <span className="stat-label">Disputes Tracked</span>
              <span className="stat-sub">Special Lok Adalat tribunal</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">27</span>
              <span className="stat-label">Pilot Projects</span>
              <span className="stat-sub">AI drone parcel validation</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">Zero</span>
              <span className="stat-label">AI Hallucinations</span>
              <span className="stat-sub">Fact-anchored RAG responses</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DUAL ACCESS PORTAL CARDS (Simple & Intuitive for Judges) */}
      <section className="simple-portals-section" id="dual-portals">
        <div className="simple-container">
          
          <div className="section-title-lockup">
            <span className="section-pill">Core Access Gateways</span>
            <h2 className="section-heading">Choose Your Platform Interface</h2>
            <p className="section-desc">
              Tailored access models for open public research and secure departmental land administration.
            </p>
          </div>

          <div className="dual-cards-row">
            
            {/* Card 1: Public Accessing (Digital Twin) */}
            <div className="portal-box public-box" id="card-public-accessing">
              <div className="portal-box-top">
                <span className="portal-tier-pill">Public Accessing</span>
                <span className="portal-tag-light">Open Citizen & Academic Access</span>
              </div>

              <div className="portal-illustration">
                <IsometricDigitalTwin className="portal-svg" />
              </div>

              <div className="portal-content">
                <h3 className="portal-title">Public Analysis System</h3>
                <p className="portal-desc">
                  Open digital twin for citizens, researchers, and planners to evaluate spatial trends and land indicators without login.
                </p>

                <ul className="portal-checklist">
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Land use information at scale (DILRMP records)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Analyze historical digitisation & dispute decline trends</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Public policy simulations & open geospatial datasets</span>
                  </li>
                </ul>

                <a 
                  href="/land-repository.html" 
                  className="btn-portal-action public-btn"
                >
                  <span>Enter Public Analysis System</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Card 2: Authorized Workspace (Geospatial Platform) */}
            <div className="portal-box authorized-box" id="card-authorized-workspace">
              <div className="portal-box-top">
                <span className="portal-tier-pill auth-pill">Authorized Workspace</span>
                <span className="portal-tag-light">Departmental Clearance Level-3</span>
              </div>

              <div className="portal-illustration">
                <IsometricGeospatialPlatform className="portal-svg" />
              </div>

              <div className="portal-content">
                <h3 className="portal-title">Authorized Geospatial Workbench</h3>
                <p className="portal-desc">
                  Restricted operations suite for Revenue Officers, District Collectors, and Tahsildars with Jan Parichay Single Sign-On.
                </p>

                <ul className="portal-checklist">
                  <li>
                    <CheckCircle2 size={16} className="check-icon saffron" />
                    <span>Interactive cadastral mapping & high-res parcel overlays</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon saffron" />
                    <span>Inter-departmental joint land acquisition rooms</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="check-icon saffron" />
                    <span>Temporal dispute SLA monitoring & tribunal registries</span>
                  </li>
                </ul>

                <a 
                  href="http://192.168.88.2:3001" 
                  className="btn-portal-action authorized-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Lock size={16} />
                  <span>Access Authorized Workspace</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>





    </div>
  );
}

export default HomePage;
