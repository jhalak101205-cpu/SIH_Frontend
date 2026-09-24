import React, { useState } from 'react';
import { X, Layers, Compass, ZoomIn, ZoomOut, Maximize2, Filter, Info, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export function MapExplorerModal({ isOpen, onClose }) {
  const [selectedLayer, setSelectedLayer] = useState('zoning'); // 'sat', 'cadastre', 'zoning', 'contours'
  const [activeParcel, setActiveParcel] = useState({
    surveyNo: 'TN-CBE-2026-4481',
    district: 'Coimbatore',
    taluk: 'Sulur',
    village: 'Irugur',
    extent: '4.85 Hectares',
    classification: 'Agricultural (Wetland / Nanjai)',
    pattaStatus: 'Digitized & Verified (100%)',
    disputeStatus: 'Clear / No Encumbrance',
    floodRisk: 'Low / Zone A'
  });

  if (!isOpen) return null;

  return (
    <div className="gis-modal-backdrop" onClick={onClose}>
      <div className="gis-modal-window animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Window Bar */}
        <div className="gis-window-header">
          <div className="gis-title-group">
            <span className="gis-brand-badge">BhumiNexus GIS Core</span>
            <h3>Interactive Geospatial Explorer & Digital Twin</h3>
            <span className="live-coord-tag">LAT: 11.0168° N | LONG: 76.9558° E</span>
          </div>

          <div className="gis-header-actions">
            <button className="gis-btn-tool" title="Export GeoJSON">Export Layer</button>
            <button className="gis-btn-close" onClick={onClose} aria-label="Close Map Explorer">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Map Explorer Body */}
        <div className="gis-workspace-layout">
          
          {/* Left GIS Layers Toolbar */}
          <aside className="gis-layers-sidebar">
            <div className="sidebar-header">
              <Layers size={18} />
              <h4>Thematic Layers</h4>
            </div>

            <div className="layer-toggle-group">
              <label className="layer-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={selectedLayer === 'sat' || selectedLayer === 'all'} 
                  onChange={() => setSelectedLayer(selectedLayer === 'sat' ? 'all' : 'sat')}
                />
                <span className="layer-name">High-Res Satellite (Cartosat-3)</span>
                <span className="layer-chip">0.5m</span>
              </label>

              <label className="layer-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={true}
                  readOnly
                />
                <span className="layer-name">Cadastral Parcels (FMB)</span>
                <span className="layer-chip active">Live</span>
              </label>

              <label className="layer-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={selectedLayer === 'zoning' || selectedLayer === 'all'}
                  onChange={() => setSelectedLayer(selectedLayer === 'zoning' ? 'all' : 'zoning')}
                />
                <span className="layer-name">Master Plan 2035 Zoning</span>
                <span className="layer-chip zone">Active</span>
              </label>

              <label className="layer-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={true}
                  readOnly
                />
                <span className="layer-name">Elevation Contours (10m)</span>
                <span className="layer-chip">DEM</span>
              </label>

              <label className="layer-checkbox-item">
                <input 
                  type="checkbox" 
                  checked={true}
                  readOnly
                />
                <span className="layer-name">Water Bodies & River Buffers</span>
                <span className="layer-chip water">PWD</span>
              </label>
            </div>

            <div className="gis-legend-box">
              <h5>Legend</h5>
              <div className="legend-items">
                <div className="legend-row"><span className="color-swatch green-dark" /> Dense Forest / Reserve</div>
                <div className="legend-row"><span className="color-swatch green-light" /> Agricultural Wetland</div>
                <div className="legend-row"><span className="color-swatch saffron" /> Mixed Urban / Residential</div>
                <div className="legend-row"><span className="color-swatch red" /> Commercial / Highway Corridor</div>
              </div>
            </div>
          </aside>

          {/* Center Map Viewport */}
          <div className="gis-viewport-center">
            {/* The generated high-tech GIS map graphic */}
            <div 
              className="gis-map-canvas"
              style={{ backgroundImage: `url('/gis_preview.jpg')` }}
            >
              {/* Overlay HUD indicators */}
              <div className="gis-hud-top-left">
                <span className="scale-indicator">1 : 15,000 | 500m</span>
              </div>

              {/* Floating pin markers */}
              <div 
                className="interactive-geo-pin pin-1"
                onClick={() => setActiveParcel({
                  surveyNo: 'TN-CBE-2026-4481',
                  district: 'Coimbatore',
                  taluk: 'Sulur',
                  village: 'Irugur',
                  extent: '4.85 Hectares',
                  classification: 'Agricultural (Wetland / Nanjai)',
                  pattaStatus: 'Digitized & Verified (100%)',
                  disputeStatus: 'Clear / No Encumbrance',
                  floodRisk: 'Low / Zone A'
                })}
                title="Click Parcel 4481"
              >
                <div className="pin-pulse" />
                <div className="pin-head">4481</div>
              </div>

              <div 
                className="interactive-geo-pin pin-2"
                onClick={() => setActiveParcel({
                  surveyNo: 'TN-MD-2026-8820',
                  district: 'Madurai',
                  taluk: 'Melur',
                  village: 'Attapatti',
                  extent: '12.4 Hectares',
                  classification: 'Urban Expansion Zone',
                  pattaStatus: 'Pending Tahsildar Resurvey',
                  disputeStatus: 'Boundary Encroachment Review',
                  floodRisk: 'Moderate / Zone B'
                })}
                title="Click Parcel 8820"
              >
                <div className="pin-pulse alert" />
                <div className="pin-head alert">8820</div>
              </div>

              {/* Map controls bottom right */}
              <div className="gis-viewport-controls">
                <button className="btn-map-control" title="Zoom In"><ZoomIn size={18} /></button>
                <button className="btn-map-control" title="Zoom Out"><ZoomOut size={18} /></button>
                <button className="btn-map-control" title="Reset North"><Compass size={18} /></button>
              </div>
            </div>
          </div>

          {/* Right Parcel Inspector Drawer */}
          <aside className="gis-inspector-sidebar">
            <div className="sidebar-header">
              <Info size={18} />
              <h4>Cadastral Parcel Inspector</h4>
            </div>

            {activeParcel ? (
              <div className="parcel-details-card">
                <div className="parcel-top-header">
                  <span className="survey-label">Survey Number</span>
                  <span className="survey-code">{activeParcel.surveyNo}</span>
                </div>

                <div className="detail-field">
                  <span className="field-name">District & Taluk</span>
                  <span className="field-val">{activeParcel.district}, {activeParcel.taluk}</span>
                </div>

                <div className="detail-field">
                  <span className="field-name">Revenue Village</span>
                  <span className="field-val">{activeParcel.village}</span>
                </div>

                <div className="detail-field">
                  <span className="field-name">Total Extent</span>
                  <span className="field-val">{activeParcel.extent}</span>
                </div>

                <div className="detail-field">
                  <span className="field-name">Land Classification</span>
                  <span className="field-val">{activeParcel.classification}</span>
                </div>

                <div className="detail-field">
                  <span className="field-name">Patta Status</span>
                  <span className="field-val text-green">
                    <CheckCircle size={14} className="inline-icon" />
                    {activeParcel.pattaStatus}
                  </span>
                </div>

                <div className="detail-field">
                  <span className="field-name">Dispute / Encumbrance</span>
                  <span className={`field-val ${activeParcel.disputeStatus.includes('Review') ? 'text-amber' : 'text-blue'}`}>
                    {activeParcel.disputeStatus.includes('Review') && <AlertTriangle size={14} className="inline-icon" />}
                    {activeParcel.disputeStatus}
                  </span>
                </div>

                <div className="inspector-actions">
                  <button className="btn-inspector-action primary">
                    <span>Generate FMB Sketch</span>
                  </button>
                  <button className="btn-inspector-action secondary">
                    <span>View Patta/Chitta</span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="no-selection-hint">Click on any cadastral parcel on the map to view digitized patta and ownership records.</p>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}
