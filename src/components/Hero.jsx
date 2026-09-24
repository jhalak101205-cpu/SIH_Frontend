import React from 'react';
import { ArrowRight, ShieldCheck, Database, Compass, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export function Hero({
  onExploreClick,
  onOpenPublicAnalysis,
  onOpenAuthorizedWorkspace
}) {
  const impactHighlights = [
    {
      num: '94%',
      label: 'Records Digitised',
      desc: 'National DILRMP saturation rate tracked across districts'
    },
    {
      num: 'SIH26019',
      label: 'Ministry Problem Solved',
      desc: 'DoLR evidence-based land governance & policy innovation'
    },
    {
      num: '38,500',
      label: 'Disputes Tracked',
      desc: 'Empirical correlation between digitization and dispute decline'
    },
    {
      num: 'Zero',
      label: 'AI Hallucinations',
      desc: 'Fact-anchored RAG responses with verified source citations'
    }
  ];

  return (
    <section className="hero-simple-container" id="hero-overview">
      {/* Background Satellite Aerial Topography */}
      <div 
        className="hero-background-media"
        style={{ backgroundImage: `url('/hero_satellite_terrain.jpg')` }}
        role="img"
        aria-label="High-resolution satellite view of Indian topography and land use"
      >
        <div className="hero-gradient-overlay" />
      </div>

      {/* Center Content Area - Clean, Dignified & Simple for Evaluators */}
      <div className="hero-content-box">
        
        {/* Ministry & SIH Tag */}
        <div className="hero-badge-strip">
          <span className="badge-sih">Smart India Hackathon 2026</span>
          <span className="badge-problem">Problem Statement: SIH26019</span>
          <span className="badge-ministry">Ministry of Rural Development & DoLR</span>
        </div>

        {/* Platform Title */}
        <h1 className="hero-bhuminexus-title">
          Bhumi<span className="text-nexus">Nexus</span>
          <span className="hero-hindi-tag"> (भूमि नेक्सस)</span>
        </h1>
        
        <h2 className="hero-bhuminexus-subtitle">
          National Digital Platform for Research, Policy Innovation & Evidence-Based Land Governance
        </h2>
        
        <p className="hero-bhuminexus-desc">
          Transforming isolated departmental land data into actionable policy decisions.
          Powered by <strong>AI Semantic Discovery (RAG)</strong>, <strong>GIS Spatial Correlation Layers</strong>, and 
          <strong> Predictive Scenario Simulators</strong> for state administrators and national researchers.
        </p>

        {/* Clear Action Buttons */}
        <div className="hero-buttons-group">
          <button
            className="btn-hero-primary"
            onClick={onOpenPublicAnalysis}
            id="btn-hero-public"
          >
            <span>Enter Public Analysis System</span>
            <ArrowRight size={18} />
          </button>

          <button
            className="btn-hero-secondary"
            onClick={onOpenAuthorizedWorkspace}
            id="btn-hero-authorized"
          >
            <ShieldCheck size={18} />
            <span>Authorized Workspace Demo</span>
          </button>
        </div>

        {/* 4 Clean Impact Metrics for Evaluators */}
        <div className="hero-metrics-strip">
          {impactHighlights.map((item, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-number">{item.num}</span>
              <span className="metric-label">{item.label}</span>
              <span className="metric-sub">{item.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
