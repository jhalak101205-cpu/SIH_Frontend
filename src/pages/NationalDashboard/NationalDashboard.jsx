import React, { useState } from 'react';
import { NationalEmblem } from '../../components/Emblem';
import { 
  Search, Lock, BookOpen, Users, MapPin, Check, AlertTriangle, Zap,
  ExternalLink, Download, ArrowLeft, Shield, Eye, Sparkles
} from 'lucide-react';

export function NationalDashboard({ onNavigateBack, onOpenMapModal, onOpenChatbot }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [accessRole, setAccessRole] = useState('public');
  const [activeModuleModal, setActiveModuleModal] = useState(null);

  const navTabs = [
    'Home',
    'Repository',
    'Workspaces',
    'Map explorer',
    'Simulation',
    'Dashboards',
    'Innovation'
  ];

  const filterPills = [
    'Land records',
    'Climate risk',
    'Urban expansion',
    'Land disputes'
  ];

  const sampleDatasets = [
    {
      id: 1,
      title: 'National Cadastral Map Vectorization & Bhu-Aadhar (ULPIN) Saturation',
      category: 'Land records',
      department: 'Department of Land Resources (DoLR)',
      date: '20 Sep 2026',
      downloads: '24,190',
      badge: '94% Digitized',
      status: 'On track'
    },
    {
      id: 2,
      title: 'District-Wise Agricultural Land Conversion & Groundwater Depletion Index',
      category: 'Climate risk',
      department: 'Central Ground Water Board & DoLR',
      date: '16 Sep 2026',
      downloads: '12,450',
      badge: 'High Vulnerability',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Tier-2 & Tier-3 City Peri-Urban Expansion Corridors & Master Plan 2035',
      category: 'Urban expansion',
      department: 'Town & Country Planning Organization (TCPO)',
      date: '10 Sep 2026',
      downloads: '18,830',
      badge: 'Master Plan 2035',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Special Lok Adalat Fast-Track Land Dispute Resolution Registry',
      category: 'Land disputes',
      department: 'Department of Justice & Land Administration',
      date: '22 Sep 2026',
      downloads: '15,200',
      badge: '38,500 Cases Tracked',
      status: 'Needs attention'
    }
  ];

  const filteredDatasets = sampleDatasets.filter(item => {
    const matchesFilter = selectedFilter ? item.category === selectedFilter : true;
    const matchesQuery = searchQuery 
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesFilter && matchesQuery;
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Map explorer') {
      onOpenMapModal();
    } else if (tab === 'Repository') {
      setActiveModuleModal('repository');
    } else if (tab === 'Workspaces') {
      setActiveModuleModal('workspaces');
    }
  };

  const handlePillClick = (pill) => {
    if (selectedFilter === pill) {
      setSelectedFilter(null);
      setSearchQuery('');
    } else {
      setSelectedFilter(pill);
      setSearchQuery(pill);
    }
  };

  return (
    <div className="national-dashboard-standalone-page animate-fade-in" id="national-dashboard-root">
      
      {/* 1. Indian Tricolor Ribbon (Image 1) */}
      <div className="gov-tricolor-bar" role="presentation">
        <div className="stripe-saffron" />
        <div className="stripe-white" />
        <div className="stripe-green" />
      </div>

      {/* 2. Top Utility & Accessibility Bar (Image 1 exact layout + Back to BhumiNexus button) */}
      <div className="dash-utility-bar">
        <div className="dash-utility-container">
          <div className="dash-utility-left">
            <button 
              className="btn-return-portal"
              onClick={onNavigateBack}
              title="Return to BhumiNexus Overview"
            >
              <ArrowLeft size={14} />
              <span>Back to BhumiNexus Overview</span>
            </button>
            <span className="dot">·</span>
            <span className="screen-text">Skip to main content</span>
            <span className="dot">·</span>
            <span className="screen-text">Screen reader access</span>
          </div>

          <div className="dash-utility-right">
            <span className="font-scales-label">A- A A+</span>
            <span className="pipe">|</span>
            <span className="lang-link">हिन्दी</span>
            <span className="pipe">|</span>
            <span className="lang-link active">English</span>
          </div>
        </div>
      </div>

      {/* 3. Official Government Platform Header (Image 1) */}
      <header className="dash-official-header">
        <div className="dash-header-container">
          
          <div className="dash-brand">
            <div className="dash-emblem-box">
              <NationalEmblem size={44} className="emblem-navy" />
            </div>

            <div className="dash-title-wrap">
              <h1 className="dash-main-title">
                National Land Research and Policy Innovation Platform
              </h1>
              <p className="dash-hindi-subtitle">
                राष्ट्रीय भूमि अनुसंधान एवं नीति नवाचार मंच · [Ministry of Rural Development / Department of Land Resources]
              </p>
            </div>
          </div>

          <div className="dash-actions">
            <div className={`dash-mode-badge ${accessRole === 'authorized' ? 'badge-authorized' : 'badge-public'}`}>
              <Shield size={14} />
              <span>{accessRole === 'authorized' ? 'Authorized Official (Level-3)' : 'Public Citizen Viewer'}</span>
              <button 
                className="btn-switch-role"
                onClick={() => setAccessRole(accessRole === 'authorized' ? 'public' : 'authorized')}
                title="Toggle Mode"
              >
                SWITCH
              </button>
            </div>

            <button className="btn-dash-signin">
              <Lock size={15} />
              <span>Sign In</span>
            </button>
          </div>

        </div>
      </header>


      {/* 5. Main Dashboard Content (Image 1 Layout) */}
      <main className="dash-main-content">
        
        {/* Search & Filter Section (Navy Tint #E8E8F5 background) */}
        <section className="dash-search-section">
          <div className="dash-search-container">
            <h2 className="dash-search-heading">
              Find research, policy papers, and datasets
            </h2>

            {/* Search Input Bar */}
            <div className="dash-search-input-box">
              <input
                type="text"
                className="dash-search-input"
                placeholder="Try: farmland conversion near cities"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && setSearchQuery(e.target.value)}
                aria-label="Search research, policy papers and datasets"
              />
              <button 
                className="dash-search-submit-btn"
                onClick={() => setSearchQuery(searchQuery)}
                aria-label="Submit Search"
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>

            {/* Filter Pills from Image 1 */}
            <div className="dash-filter-pills-row" role="group" aria-label="Filter categories">
              {filterPills.map((pill) => (
                <button
                  key={pill}
                  className={`dash-pill-btn ${selectedFilter === pill ? 'active' : ''}`}
                  onClick={() => handlePillClick(pill)}
                >
                  {selectedFilter === pill && <span className="pill-check">✓</span>}
                  <span>{pill}</span>
                </button>
              ))}

              {selectedFilter && (
                <button 
                  className="dash-clear-filter-btn"
                  onClick={() => { setSelectedFilter(null); setSearchQuery(''); }}
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 6. Three Core Module Cards (Image 1) */}
        <section className="dash-modules-section">
          <div className="dash-modules-grid">
            
            {/* Module 1: Repository */}
            <div 
              className="dash-module-card"
              onClick={() => setActiveModuleModal('repository')}
              role="button"
              tabIndex={0}
            >
              <div className="module-icon-box">
                <BookOpen size={24} className="module-icon" />
              </div>
              <div className="module-text-wrap">
                <h3 className="module-title">Repository</h3>
                <p className="module-description">Papers, datasets, legal documents</p>
              </div>
              <div className="module-hover-hint">
                <ExternalLink size={16} />
              </div>
            </div>

            {/* Module 2: Workspaces */}
            <div 
              className="dash-module-card"
              onClick={() => setActiveModuleModal('workspaces')}
              role="button"
              tabIndex={0}
            >
              <div className="module-icon-box">
                <Users size={24} className="module-icon" />
              </div>
              <div className="module-text-wrap">
                <h3 className="module-title">Workspaces</h3>
                <p className="module-description">Work across departments</p>
              </div>
              <div className="module-hover-hint">
                <ExternalLink size={16} />
              </div>
            </div>

            {/* Module 3: Map Explorer */}
            <div 
              className="dash-module-card module-map-card"
              onClick={onOpenMapModal}
              role="button"
              tabIndex={0}
            >
              <div className="module-icon-box">
                <MapPin size={24} className="module-icon" />
              </div>
              <div className="module-text-wrap">
                <h3 className="module-title">Map explorer</h3>
                <p className="module-description">Land use and climate layers</p>
              </div>
              <div className="module-hover-hint">
                <Eye size={16} />
              </div>
            </div>

          </div>
        </section>

        {/* 7. Policy Indicators Section (Image 1 exact values & styling) */}
        <section className="dash-policy-section">
          <div className="policy-section-header">
            <h3 className="policy-title">Policy indicators</h3>
            <span className="sample-data-label">Sample data</span>
          </div>

          <div className="policy-indicators-grid">
            
            {/* Indicator 1: Records digitised (94% On track) */}
            <div className="policy-card">
              <span className="indicator-label">Records digitised</span>
              <div className="indicator-value-row">
                <span className="indicator-big-number">94%</span>
              </div>
              <div className="indicator-status-pill pill-on-track">
                <Check size={14} className="pill-icon" />
                <span>On track</span>
              </div>
              <div className="indicator-progress-bar">
                <div className="progress-fill green-fill" style={{ width: '94%' }} />
              </div>
            </div>

            {/* Indicator 2: Open land disputes (38,500 Needs attention) */}
            <div className="policy-card">
              <span className="indicator-label">Open land disputes</span>
              <div className="indicator-value-row">
                <span className="indicator-big-number">38,500</span>
              </div>
              <div className="indicator-status-pill pill-needs-attention">
                <AlertTriangle size={14} className="pill-icon" />
                <span>Needs attention</span>
              </div>
              <div className="indicator-subtext">
                Special Lok Adalat tribunal initiated
              </div>
            </div>

            {/* Indicator 3: Pilot projects (27 Active) */}
            <div className="policy-card">
              <span className="indicator-label">Pilot projects</span>
              <div className="indicator-value-row">
                <span className="indicator-big-number">27</span>
              </div>
              <div className="indicator-status-pill pill-active">
                <Zap size={14} className="pill-icon" />
                <span>Active</span>
              </div>
              <div className="indicator-subtext">
                Digital Twin & AI drone parcel validation
              </div>
            </div>

          </div>
        </section>

        {/* 8. Search Results / Data Catalog Workbench */}
        <section className="dash-catalog-section">
          <div className="catalog-header-bar">
            <div>
              <h3 className="catalog-title">
                {selectedFilter ? `Results for "${selectedFilter}"` : 'Curated Policy & Geospatial Assets'}
              </h3>
              <p className="catalog-subtitle">Showing {filteredDatasets.length} datasets ready for analysis and export</p>
            </div>
            
            <div className="catalog-tools">
              <button className="btn-tool-secondary" onClick={onOpenChatbot}>
                <Sparkles size={14} />
                <span>Ask AI Copilot</span>
              </button>
            </div>
          </div>

          <div className="catalog-list">
            {filteredDatasets.map((item) => (
              <div key={item.id} className="catalog-item-card">
                <div className="item-main-info">
                  <div className="item-tag-row">
                    <span className="item-cat-pill">{item.category}</span>
                    <span className="item-dept">{item.department}</span>
                    <span className="item-date">{item.date}</span>
                  </div>
                  <h4 className="item-title">{item.title}</h4>
                </div>

                <div className="item-meta-side">
                  <span className={`item-badge-pill status-${item.status.toLowerCase().replace(' ', '-')}`}>
                    {item.badge}
                  </span>
                  <button 
                    className="btn-item-download"
                    onClick={() => alert(`Downloading metadata & shapefile for: ${item.title}`)}
                    title="Download Dataset"
                  >
                    <Download size={15} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 9. Official Footer (Image 1 style) */}
      <footer className="dash-footer">
        <div className="dash-footer-container">
          <div className="footer-left-info">
            <span className="last-updated-text">Last updated: 20 Sep 2026</span>
          </div>

          <div className="footer-right-links">
            <a href="#accessibility" className="footer-link">Accessibility statement</a>
            <span className="dot">·</span>
            <a href="#terms" className="footer-link">Terms of use</a>
            <span className="dot">·</span>
            <a href="#contact" className="footer-link">Contact us</a>
          </div>
        </div>
      </footer>

      {/* Modals for Repository & Workspaces */}
      {activeModuleModal === 'repository' && (
        <div className="feature-modal-backdrop" onClick={() => setActiveModuleModal(null)}>
          <div className="feature-modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>National Land Repository: Papers, Datasets & Legal Frameworks</h3>
              <button className="modal-close" onClick={() => setActiveModuleModal(null)}>✕</button>
            </div>
            <div className="modal-body">
              <p>Explore 14,200+ indexed government records, DILRMP guidelines, and Survey of India cadastral maps:</p>
              <div className="repo-table-wrap">
                <table className="repo-table">
                  <thead>
                    <tr>
                      <th>Document / Record Title</th>
                      <th>Category</th>
                      <th>Release Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Right to Fair Compensation and Transparency in Land Acquisition (RFCTLARR) Act</td>
                      <td>Legal Framework</td>
                      <td>Aug 2026</td>
                      <td><button className="btn-table-action">View PDF</button></td>
                    </tr>
                    <tr>
                      <td>Digital India Land Records Modernization Programme (DILRMP) Phase II Guidelines</td>
                      <td>Policy Document</td>
                      <td>Sep 2026</td>
                      <td><button className="btn-table-action">Download PDF</button></td>
                    </tr>
                    <tr>
                      <td>Bhu-Aadhar (ULPIN) Unique 14-Digit Parcel Standard Specification</td>
                      <td>Technical Standard</td>
                      <td>Jul 2026</td>
                      <td><button className="btn-table-action">Inspect Standard</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModuleModal === 'workspaces' && (
        <div className="feature-modal-backdrop" onClick={() => setActiveModuleModal(null)}>
          <div className="feature-modal-content wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Inter-Departmental Workspaces & Multi-Agency Projects</h3>
              <button className="modal-close" onClick={() => setActiveModuleModal(null)}>✕</button>
            </div>
            <div className="modal-body">
              <p>Active collaborative rooms connecting Revenue, Forest, Urban Planning, and Land Acquisition Authorities:</p>
              <div className="workspaces-grid">
                <div className="workspace-box">
                  <div className="ws-header">
                    <h4>National Industrial Corridor Joint Land Clearance</h4>
                    <span className="ws-badge active">In Progress</span>
                  </div>
                  <p>Coordinating land acquisition, compensation verification, and R&R stages under SIH26016.</p>
                  <div className="ws-members">DoLR · State Revenue · National Highways Authority</div>
                </div>
                <div className="workspace-box">
                  <div className="ws-header">
                    <h4>Watershed Rejuvenation & Cadastral Overlay Taskforce</h4>
                    <span className="ws-badge review">Under Review</span>
                  </div>
                  <p>Correlating SRISHTI-DRISHTI satellite contours with agricultural patta boundaries.</p>
                  <div className="ws-members">Agriculture Dept · ISRO / NRSC · Rural Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
