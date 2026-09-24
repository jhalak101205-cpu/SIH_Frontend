import React, { useState } from 'react';
import { 
  Search, BookOpen, Users, MapPin, Check, AlertTriangle, Zap,
  ExternalLink, Download, Shield, Eye, Sparkles, ArrowLeft
} from 'lucide-react';

export function DashboardPage({ onNavigate, onOpenMapModal, onOpenChatbot }) {
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
    <div className="page-view dashboard-page animate-fade-in">
      <div className="dashboard-page-container">
        
        {/* Page Top Context Banner */}
        <div className="page-header-context">
          <div>
            <span className="context-pill">National Land Research & Policy Innovation Platform</span>
            <h2 className="context-title">Live National Dashboard (Image 1 Implementation)</h2>
            <p className="context-desc">
              Grounded data viewer adhering to the official government palette: Navy <code>#000080</code>, Saffron <code>#FF9933</code>, Green <code>#138808</code>, and Navy Tint <code>#E8E8F5</code>.
            </p>
          </div>

          <button className="btn-back-home" onClick={() => onNavigate('home')}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Dashboard Box (Image 1) */}
        <div className="gov-dashboard-wrapper">
          

          {/* 2. Search Section (Navy Tint #E8E8F5 from Image 1) */}
          <section className="dash-search-section">
            <div className="dash-search-container">
              <h3 className="dash-search-heading">
                Find research, policy papers, and datasets
              </h3>

              {/* Search Bar Input */}
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

          {/* 3. Three Core Modules (Image 1) */}
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
                  <h4 className="module-title">Repository</h4>
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
                  <h4 className="module-title">Workspaces</h4>
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
                  <h4 className="module-title">Map explorer</h4>
                  <p className="module-description">Land use and climate layers</p>
                </div>
                <div className="module-hover-hint">
                  <Eye size={16} />
                </div>
              </div>

            </div>
          </section>

          {/* 4. Policy Indicators Section (Exact Values & Tags from Image 1) */}
          <section className="dash-policy-section">
            <div className="policy-section-header">
              <h4 className="policy-title">Policy indicators</h4>
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

          {/* 5. Datasets Catalog */}
          <section className="dash-catalog-section">
            <div className="catalog-header-bar">
              <div>
                <h4 className="catalog-title">
                  {selectedFilter ? `Results for "${selectedFilter}"` : 'Curated Policy & Geospatial Assets'}
                </h4>
                <p className="catalog-subtitle">Showing {filteredDatasets.length} datasets ready for analysis and export</p>
              </div>
              
              <div className="catalog-tools">
                <button className="btn-tool-secondary" onClick={onOpenChatbot}>
                  <Sparkles size={14} />
                  <span>Ask Bhumi AI Copilot</span>
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
                    <h5 className="item-title">{item.title}</h5>
                  </div>

                  <div className="item-meta-side">
                    <span className={`item-badge-pill status-${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.badge}
                    </span>
                    <button 
                      className="btn-item-download"
                      onClick={() => alert(`Downloading verified dataset: ${item.title}`)}
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

        </div>

      </div>

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
                      <td><button className="btn-table-action">View Document</button></td>
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
