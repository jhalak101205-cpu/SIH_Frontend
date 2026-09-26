import React from 'react';
import { NationalEmblem } from './Emblem';

export function TopNav({
  activePage,
  onNavigate,
  fontScale,
  setFontScale,
  currentLang,
  setCurrentLang,
  onOpenSignIn,
  onOpenUserManual
}) {
  const navTabs = [
    { id: 'home', label: 'Home (Overview)' },
    { id: 'repository', label: 'Land Repository' },
    { id: 'api', label: 'API Documentation' },
    { id: 'hackathon', label: 'SIH 2026 Information' }
  ];

  const handleTabClick = (tab) => {
    onNavigate(tab.id);
  };

  return (
    <header className="gov-single-header" id="top-nav-bar">
      {/* 1. Indian Tricolor Ribbon (Saffron, White, Green) */}
      <div className="gov-tricolor-bar" role="presentation">
        <div className="stripe-saffron" />
        <div className="stripe-white" />
        <div className="stripe-green" />
      </div>

      {/* 2. Official Government Accessibility & Language Strip (Image 1 top bar) */}
      <div className="dash-utility-bar">
        <div className="dash-utility-container">
          <div className="dash-utility-left">
            <span className="gov-link">Government of India</span>
            <span className="dot">·</span>
            <span className="screen-text">Screen reader access</span>
          </div>

          <div className="dash-utility-right">
            {/* Font Scalers */}
            <div className="font-scales-group">
              <button 
                className={`scaler-btn ${fontScale === 'sm' ? 'active' : ''}`}
                onClick={() => setFontScale('sm')}
                title="Small Font"
              >
                A-
              </button>
              <button 
                className={`scaler-btn ${fontScale === 'md' ? 'active' : ''}`}
                onClick={() => setFontScale('md')}
                title="Standard Font"
              >
                A
              </button>
              <button 
                className={`scaler-btn ${fontScale === 'lg' ? 'active' : ''}`}
                onClick={() => setFontScale('lg')}
                title="Large Font"
              >
                A+
              </button>
            </div>

            <span className="pipe">|</span>

            {/* Language Selection */}
            <div className="lang-group">
              <button 
                className={`lang-link ${currentLang === 'hi' ? 'active' : ''}`}
                onClick={() => setCurrentLang('hi')}
              >
                हिन्दी
              </button>
              <span className="pipe">|</span>
              <button 
                className={`lang-link ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => setCurrentLang('en')}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Official Platform Header with National Emblem (Image 1 Style) */}
      <div className="dash-official-header">
        <div className="dash-header-container">
          
          {/* Emblem & Branding */}
          <div className="dash-brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
            <NationalEmblem size={44} className="emblem-svg" />

            <div className="dash-title-wrap">
              <h1 className="dash-main-title">
                BhumiNexus
              </h1>
              <p className="dash-hindi-subtitle">
                राष्ट्रीय भूमि अनुसंधान एवं नीति नवाचार मंच · National Land Research & Policy Innovation Platform
              </p>
              <p className="dash-ministry-title">
                Ministry of Rural Development & Department of Land Resources (DoLR), Government of India
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="dash-actions">
            <button
              className="btn-manual-header"
              onClick={onOpenUserManual}
              title="View Project Brief & Evaluator Guide"
            >
              Evaluator Guide
            </button>

            <button
              className="btn-dash-signin"
              onClick={onOpenSignIn}
              title="Official Department Login"
            >
              Officer Sign In
            </button>
          </div>

        </div>
      </div>

      {/* 4. Solid Navy Navigation Tabs (SINGLE NAVBAR linking to separate pages) */}
      <nav className="dash-nav-bar" aria-label="Main Navigation">
        <div className="dash-nav-container">
          <ul className="dash-nav-tabs">
            <li className="dash-nav-item">
              <a
                href="/"
                className={`dash-tab-button ${activePage === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Home (Overview)
                {activePage === 'home' && <div className="dash-saffron-tab-line" />}
              </a>
            </li>

            <li className="dash-nav-item">
              <a
                href="/land-repository.html"
                className="dash-tab-button"
              >
                Land Repository
              </a>
            </li>

            <li className="dash-nav-item">
              <a
                href="/api-documentation.html"
                className="dash-tab-button"
              >
                API Documentation
              </a>
            </li>

            <li className="dash-nav-item">
              <a
                href="#hackathons"
                className="dash-tab-button"
                onClick={(e) => {
                  e.preventDefault();
                  if (activePage !== 'home') {
                    onNavigate('home');
                  }
                  setTimeout(() => {
                    document.getElementById('hackathons')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                SIH 2026 Information
              </a>
            </li>
          </ul>

          <div className="nav-cloud-pill">
            <span className="live-dot" />
            <span>MeghRaj NIC Cloud: <strong>Active</strong></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
