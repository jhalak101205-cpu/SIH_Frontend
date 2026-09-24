import React from 'react';
import { Award, CheckCircle2, Layers, Cpu, Database, Compass, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export function HackathonSection() {
  return (
    <section className="sih-section-wrapper" id="sih-info">
      <div className="sih-container">
        
        {/* Section Header */}
        <div className="sih-header-block">
          <div className="pill-category sih-pill">
            <span className="pill-dot orange" />
            <span>Smart India Hackathon 2026 · Official Submission</span>
          </div>
          <h2 className="sih-main-heading">
            BhumiNexus: Built for SIH Problem Statement <span className="text-highlight">SIH26019</span>
          </h2>
          <p className="sih-sub-heading">
            National Digital Platform for Research, Policy Innovation, and Evidence-Based Land Governance
          </p>
        </div>

        {/* Quick Facts Card Grid for Evaluators */}
        <div className="sih-facts-grid">
          <div className="sih-fact-card">
            <span className="fact-label">Problem Statement ID</span>
            <span className="fact-value">SIH26019</span>
            <span className="fact-desc">National Land Governance Engine</span>
          </div>

          <div className="sih-fact-card">
            <span className="fact-label">Nodal Ministry / Department</span>
            <span className="fact-value-text">Ministry of Rural Development</span>
            <span className="fact-desc">Department of Land Resources (DoLR)</span>
          </div>

          <div className="sih-fact-card">
            <span className="fact-label">Competition Theme</span>
            <span className="fact-value-text">Smart Automation</span>
            <span className="fact-desc">Category: Software / AI & GIS</span>
          </div>

          <div className="sih-fact-card">
            <span className="fact-label">Development Team</span>
            <span className="fact-value-text">Team NERO</span>
            <span className="fact-desc">SIH 2026 Finalist Team</span>
          </div>
        </div>

        {/* The DoLR Ecosystem Pipeline Diagram (From read.md) */}
        <div className="ecosystem-box">
          <div className="ecosystem-header">
            <h3>🏛️ The DoLR Ecosystem Pipeline: How BhumiNexus Connects Land Governance</h3>
            <p>
              BhumiNexus does not operate in isolation. It acts as the <strong>analytical brain</strong> connecting 
              related SIH land data initiatives across the Department of Land Resources:
            </p>
          </div>

          <div className="pipeline-flow-grid">
            <div className="pipeline-step-card">
              <div className="step-tag">SIH26018</div>
              <h4>Legacy Record OCR</h4>
              <p>Digitizes historical cadastral maps & Urdu/Tamil revenue records into structured vectors.</p>
              <div className="step-arrow-down">&darr; Feeds Clean Data</div>
            </div>

            <div className="pipeline-step-card">
              <div className="step-tag">SIH26016</div>
              <h4>Land Acquisition Tracker</h4>
              <p>Tracks real-time acquisition timelines, R&R stages, and project compensation disbursals.</p>
              <div className="step-arrow-down">&darr; Real-Time SLAs</div>
            </div>

            <div className="pipeline-step-card">
              <div className="step-tag">SIH26015</div>
              <h4>SRISHTI-DRISHTI Satellite</h4>
              <p>Streams multi-spectral satellite imagery for watershed, vegetation, and parcel boundaries.</p>
              <div className="step-arrow-down">&darr; Geospatial Layers</div>
            </div>
          </div>

          {/* Central BhumiNexus Engine */}
          <div className="pipeline-core-card">
            <div className="core-badge">Central Intelligence Engine (Our Project)</div>
            <h3>BhumiNexus (SIH26019) · National Research & Policy Simulator</h3>
            <p>
              Aggregates all incoming streams into <strong>AI Semantic Discovery (RAG)</strong>, 
              <strong>GIS Correlation Heatmaps</strong>, and <strong>Predictive Policy Risk Simulators</strong> for district collectors and national policymakers.
            </p>
          </div>
        </div>

        {/* Key Assessment Criteria for Evaluators */}
        <div className="evaluator-checklist-box">
          <h3 className="checklist-title">
            <Award size={22} className="award-icon" />
            Key Evaluator Deliverables (How BhumiNexus Scores High)
          </h3>

          <div className="checklist-grid">
            <div className="checklist-item">
              <CheckCircle2 size={20} className="check-icon" />
              <div>
                <strong>Zero AI Hallucination:</strong>
                <p>Chatbot & semantic search strictly cite DILRMP policy frameworks and verified land records.</p>
              </div>
            </div>

            <div className="checklist-item">
              <CheckCircle2 size={20} className="check-icon" />
              <div>
                <strong>Evidence-Based Simulator:</strong>
                <p>Explainable ML models allow policymakers to test policy changes before rolling them out.</p>
              </div>
            </div>

            <div className="checklist-item">
              <CheckCircle2 size={20} className="check-icon" />
              <div>
                <strong>Lightweight & OGC Compliant:</strong>
                <p>Open-source Leaflet and GeoJSON maps run smoothly on standard district office hardware.</p>
              </div>
            </div>

            <div className="checklist-item">
              <CheckCircle2 size={20} className="check-icon" />
              <div>
                <strong>GIGW 3.0 & Data Sovereignty:</strong>
                <p>Fully compliant with Indian Government Web Guidelines, bilingual accessibility, and local storage.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
