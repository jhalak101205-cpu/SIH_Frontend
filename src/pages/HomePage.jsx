import React from 'react';
import { ArrowRight, LayoutDashboard, Code2, Award, CheckCircle2, ShieldCheck, Database, Layers, Sparkles } from 'lucide-react';

export function HomePage({ onNavigate }) {
  const metricStats = [
    { num: '94%', label: 'Records Digitised', desc: 'DILRMP national saturation tracked' },
    { num: 'SIH26019', label: 'Problem Statement', desc: 'Ministry of Rural Development & DoLR' },
    { num: '38,500', label: 'Disputes Tracked', desc: 'Special Lok Adalat tribunal data' },
    { num: 'Zero', label: 'AI Hallucinations', desc: 'Fact-anchored RAG with source citations' },
  ];

  return (
    <div className="page-view home-page animate-fade-in">
      
      {/* 1. Hero Section (Clean, Simple & Non-Overwhelming) */}
      <section className="home-hero-section">
        <div 
          className="hero-background-media"
          style={{ backgroundImage: `url('/hero_satellite_terrain.jpg')` }}
          role="img"
          aria-label="High-resolution satellite view of Indian topography"
        >
          <div className="hero-gradient-overlay" />
        </div>

        <div className="home-hero-content">
          <div className="hero-pill-row">
            <span className="pill-sih">Smart India Hackathon 2026</span>
            <span className="pill-problem">Problem Statement: SIH26019</span>
            <span className="pill-dept">Ministry of Rural Development & DoLR</span>
          </div>

          <h1 className="hero-title">
            Bhumi<span className="text-nexus">Nexus</span>
            <span className="hindi-title"> (भूमि नेक्सस)</span>
          </h1>

          <h2 className="hero-subtitle">
            National Digital Platform for Research, Policy Innovation & Evidence-Based Land Governance
          </h2>

          <p className="hero-description">
            A centralized, intelligent knowledge-to-policy engine developed for the Department of Land Resources (DoLR).
            Transforming legacy cadastral records and administrative datasets into clear, evidence-based policy insights.
          </p>

          <div className="hero-actions">
            <button 
              className="btn-primary-hero"
              onClick={() => onNavigate('dashboard')}
            >
              <span>Explore National Dashboard</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn-secondary-hero"
              onClick={() => onNavigate('hackathon')}
            >
              <Award size={18} />
              <span>SIH 2026 Information</span>
            </button>
          </div>

          {/* 4 Key Impact Metric Badges */}
          <div className="hero-metrics-grid">
            {metricStats.map((item, idx) => (
              <div key={idx} className="hero-metric-tile">
                <span className="tile-num">{item.num}</span>
                <span className="tile-title">{item.label}</span>
                <span className="tile-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Project Executive Overview (Simple for Non-Tech Evaluators) */}
      <section className="home-overview-section">
        <div className="home-container">
          
          <div className="section-header-simple">
            <span className="section-pill">Executive Project Summary</span>
            <h2 className="section-heading">Why BhumiNexus Matters for Indian Land Governance</h2>
            <p className="section-subtext">
              Built by <strong>Team NERO</strong> to solve the critical gap between raw administrative land data 
              and actual policy evaluation.
            </p>
          </div>

          {/* Problem vs Solution Comparison */}
          <div className="problem-solution-grid">
            <div className="ps-card problem-card">
              <span className="ps-tag tag-problem">The Core Challenge</span>
              <h3>Trapped Data & Departmental Silos</h3>
              <p>
                India possesses vast volumes of land records (DILRMP, legacy cadastral maps, satellite imagery). 
                However, data remains trapped in departmental silos. Policymakers and district administrators 
                lack a unified, evidence-based tool to evaluate policy outcomes or anticipate dispute bottlenecks.
              </p>
            </div>

            <div className="ps-card solution-card">
              <span className="ps-tag tag-solution">The BhumiNexus Solution</span>
              <h3>Unified Analytical Brain</h3>
              <p>
                BhumiNexus bridges raw data with actionable policy decisions through 
                <strong> AI Semantic Search (RAG)</strong> across policy papers, 
                <strong> GIS Correlation Layers</strong> linking digitization to dispute decline, and 
                <strong> Grounded National KPIs</strong> with zero hallucinations.
              </p>
            </div>
          </div>

          {/* 3 Dedicated Page Navigation Cards */}
          <div className="page-nav-cards-block">
            <h3 className="nav-cards-header">Explore The Platform Sections</h3>
            
            <div className="nav-cards-grid">
              
              {/* Card 1: National Dashboard */}
              <div 
                className="nav-destination-card"
                onClick={() => onNavigate('dashboard')}
                role="button"
                tabIndex={0}
              >
                <div className="card-icon-box navy">
                  <LayoutDashboard size={26} />
                </div>
                <div className="card-info">
                  <span className="card-tag">Page 2</span>
                  <h4>National Land Dashboard</h4>
                  <p>
                    Replication of the official Image 1 government portal with live search, 
                    filter pills, repository, workspaces, and policy indicators (94% Digitised, 38,500 Disputes).
                  </p>
                </div>
                <span className="card-link-arrow">Open Dashboard &rarr;</span>
              </div>

              {/* Card 2: REST API Documentation */}
              <div 
                className="nav-destination-card"
                onClick={() => onNavigate('api')}
                role="button"
                tabIndex={0}
              >
                <div className="card-icon-box saffron">
                  <Code2 size={26} />
                </div>
                <div className="card-info">
                  <span className="card-tag">Page 3</span>
                  <h4>REST API & Architecture</h4>
                  <p>
                    Clear, plain-English documentation of our FastAPI endpoints: 
                    AI Semantic Search, GIS Correlation Layers, and Grounded National Governance KPIs.
                  </p>
                </div>
                <span className="card-link-arrow">View API Docs &rarr;</span>
              </div>

              {/* Card 3: Hackathon Info */}
              <div 
                className="nav-destination-card"
                onClick={() => onNavigate('hackathon')}
                role="button"
                tabIndex={0}
              >
                <div className="card-icon-box green">
                  <Award size={26} />
                </div>
                <div className="card-info">
                  <span className="card-tag">Page 4</span>
                  <h4>SIH 2026 Information</h4>
                  <p>
                    Complete details on Problem Statement SIH26019, Department of Land Resources (DoLR) 
                    pipeline alignment, Team NERO details, and evaluator assessment criteria.
                  </p>
                </div>
                <span className="card-link-arrow">Read SIH Brief &rarr;</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
