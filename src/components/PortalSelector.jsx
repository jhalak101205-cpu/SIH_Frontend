import React from 'react';
import { IsometricDigitalTwin, IsometricGeospatialPlatform } from './IsometricIllustrations';
import { BookOpen, CheckCircle2, ArrowRight, ShieldCheck, Globe2, Sparkles } from 'lucide-react';

export function PortalSelector({
  onSelectPublicAnalysis,
  onSelectAuthorizedWorkspace,
  onOpenUserManual
}) {
  return (
    <section className="portal-selector-section" id="portal-selector-section">
      <div className="portal-selector-container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <div className="pill-category portal-pill">
            <span className="pill-dot green" />
            <span>Core System Gateways</span>
          </div>
          <h2 className="section-main-heading">
            Dual Access Architecture: Choose Your Workspace
          </h2>
          <p className="section-sub-heading">
            Designed to serve both open public researchers and authorized departmental officers with tailored data privileges.
          </p>
        </div>

        {/* Central 2 Cards from Image 3 */}
        <div className="dual-cards-grid">
          
          {/* CARD 1: Public Analysis System (Image 3 Left Card) */}
          <div className="portal-access-card public-card">
            {/* Top Badge */}
            <div className="card-top-tag">
              <Globe2 size={15} />
              <span>Public Citizen & Academic Access</span>
            </div>

            {/* 3D Isometric Digital Twin Graphic */}
            <div className="card-illustration-wrap">
              <IsometricDigitalTwin className="isometric-svg" />
            </div>

            {/* Card Content & Title */}
            <div className="card-content-body">
              <div className="card-heading-lockup">
                <span className="card-eyebrow">BhumiNexus Digital Twin</span>
                <h3 className="card-title">Public Analysis System</h3>
              </div>

              {/* 3 Bullets from Image 3 */}
              <ul className="card-bullet-list">
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Land use information at scale</span>
                </li>
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Analyse trends and patterns</span>
                </li>
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Policy simulations</span>
                </li>
              </ul>

              {/* Saffron CTA Button (Image 3 style) */}
              <div className="card-action-row">
                <button
                  className="btn-portal-cta saffron-btn"
                  onClick={onSelectPublicAnalysis}
                  id="btn-public-analysis"
                >
                  <span>Enter Public Analysis System</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="card-footer-note">
              <span>Open data under NDSAP · No departmental login required</span>
            </div>
          </div>

          {/* CARD 2: Authorized Workspace Demo (Image 3 Right Card) */}
          <div className="portal-access-card authorized-card">
            {/* Top Badge */}
            <div className="card-top-tag authorized-tag">
              <ShieldCheck size={15} />
              <span>Departmental Clearance Level-3</span>
            </div>

            {/* 3D Isometric Geospatial Platform Graphic */}
            <div className="card-illustration-wrap">
              <IsometricGeospatialPlatform className="isometric-svg" />
            </div>

            {/* Card Content & Title */}
            <div className="card-content-body">
              <div className="card-heading-lockup">
                <span className="card-eyebrow">BhumiNexus Geospatial Workbench</span>
                <h3 className="card-title">Authorized Workspace Demo</h3>
              </div>

              {/* 3 Bullets from Image 3 */}
              <ul className="card-bullet-list">
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Interactive mapping</span>
                </li>
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Integrated datasets</span>
                </li>
                <li className="bullet-item">
                  <span className="bullet-dot" />
                  <span>Temporal analysis</span>
                </li>
              </ul>

              {/* Saffron CTA Button (Image 3 style) */}
              <div className="card-action-row">
                <button
                  className="btn-portal-cta saffron-btn"
                  onClick={onSelectAuthorizedWorkspace}
                  id="btn-authorized-workspace"
                >
                  <span>Access Authorized Workspace Demo</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="card-footer-note">
              <span>Single Sign-On (Jan Parichay) · District Collectors & Tahsildars</span>
            </div>
          </div>

        </div>

        {/* Floating Documentation & User Manual Button from Image 3 */}
        <div className="manual-button-row">
          <button
            className="btn-tinai-manual"
            onClick={onOpenUserManual}
            title="Download / View Official User Manual & Project Architecture"
          >
            <BookOpen size={18} />
            <span>BhumiNexus User Manual & Architecture Document</span>
          </button>
        </div>

      </div>
    </section>
  );
}
