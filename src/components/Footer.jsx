import React from 'react';
import { NationalEmblem } from './Emblem';
import { Shield, ExternalLink, Mail, MapPin, Award } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="gov-official-footer" id="contact">
      {/* Indian Tricolor Ribbon */}
      <div className="gov-tricolor-bar" role="presentation">
        <div className="stripe-saffron" />
        <div className="stripe-white" />
        <div className="stripe-green" />
      </div>

      <div className="footer-top-container">
        <div className="footer-grid">

          {/* Column 1: Ministry & Hackathon Branding */}
          <div className="footer-col brand-col">
            <div className="footer-emblems-row">
              <NationalEmblem size={44} className="footer-emblem-gold" />
            </div>
            <h3 className="footer-brand-title">
              BhumiNexus (भूमि नेक्सस)
            </h3>
            <p className="footer-brand-sub">
              National Digital Platform for Research, Policy Innovation, and Evidence-Based Land Governance.
              Submitted for <strong>Smart India Hackathon 2026</strong> under Problem Statement <strong>SIH26019</strong>.
            </p>
            <div className="sih-team-badge">
              <Award size={14} />
              <span>Developed by Team NERO · Theme: Smart Automation</span>
            </div>
          </div>

          {/* Column 2: System Portals */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform Portals</h4>
            <ul className="footer-link-list">
              <li><a href="/">Home (Overview)</a></li>
              <li><a href="/land-repository.html">National Land Repository</a></li>
              <li><a href="/api-documentation.html">REST API Documentation</a></li>
              <li><a href="/hackathons.html">Hackathon</a></li>
            </ul>
          </div>

          {/* Column 3: SIH & DoLR Ecosystem */}
          <div className="footer-col">
            <h4 className="footer-col-title">DoLR Ecosystem</h4>
            <ul className="footer-link-list">
              <li><a href="/hackathons.html#sih-statement">SIH26019 Problem Overview</a></li>
              <li><a href="/hackathons.html">SIH26018 (Legacy OCR Pipeline)</a></li>
              <li><a href="/hackathons.html">SIH26016 (Acquisition SLA Tracker)</a></li>
              <li><a href="/hackathons.html">SIH26015 (SRISHTI-DRISHTI Satellite)</a></li>
              <li><a href="/hackathons.html">Evaluator Assessment Rubric</a></li>
            </ul>
          </div>

          {/* Column 4: Nodal Ministry Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nodal Authority</h4>
            <div className="footer-contact-info">
              <p className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Department of Land Resources (DoLR), NBO Building, Nirman Bhawan, New Delhi - 110011</span>
              </p>
              <p className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>bhuminexus-sih@dolr.gov.in</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & NIC Attribution */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="nic-attribution">
            <p>
              Designed & Built by <strong>Team NERO</strong> for <strong>Smart India Hackathon 2026</strong>.
              Technical standards aligned with <strong>National Informatics Centre (NIC) & GIGW 3.0</strong>.
            </p>
          </div>
          <div className="last-updated-box">
            <span>Last updated: <strong>20 Sep 2026</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
