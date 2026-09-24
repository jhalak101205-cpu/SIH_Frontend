import React from 'react';
import { X, BookOpen, Download, CheckCircle, Award, Shield, FileText } from 'lucide-react';

export function UserManualModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="feature-modal-backdrop" onClick={onClose}>
      <div className="feature-modal-content wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-with-badge">
            <span className="badge-pill">SIH26019 Evaluator Brief</span>
            <h3>BhumiNexus Platform Architecture & User Manual</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close Manual">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body user-manual-body">
          <div className="manual-section">
            <h4>1. Executive Summary for Evaluators</h4>
            <p>
              <strong>BhumiNexus</strong> is an evidence-based land governance and policy innovation engine built for 
              <strong> Smart India Hackathon 2026 (Problem Statement ID: SIH26019)</strong> under the 
              <strong> Ministry of Rural Development & Department of Land Resources (DoLR)</strong>.
            </p>
          </div>

          <div className="manual-section">
            <h4>2. Public Analysis System vs. Authorized Workspace Demo</h4>
            <div className="manual-comparison-grid">
              <div className="manual-box">
                <h5>Public Analysis System (Open Research)</h5>
                <ul>
                  <li>Open to citizens, researchers, and universities without departmental login.</li>
                  <li>Spatial land use classification and agricultural-to-urban conversion trends.</li>
                  <li>Downloadable open datasets compliant with NDSAP and OGC standards.</li>
                </ul>
              </div>

              <div className="manual-box authorized-box">
                <h5>Authorized Workspace Demo (DoLR Officials)</h5>
                <ul>
                  <li>Role-based access (District Magistrates, Sub-Divisional Magistrates, Tahsildars).</li>
                  <li>Live tracking of Lok Adalat land dispute tribunals and Tehsil turnaround SLAs.</li>
                  <li>Predictive risk simulator to test land acquisition timelines and fiscal savings.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="manual-section">
            <h4>3. Technical Architecture & Tech Stack</h4>
            <ul>
              <li><strong>Frontend:</strong> React 19, Vanilla CSS Design System, Lucide Icons.</li>
              <li><strong>Backend:</strong> Python FastAPI, Uvicorn asynchronous REST API.</li>
              <li><strong>AI Semantic Search (RAG):</strong> Sentence-Transformers vector embeddings stored in ChromaDB (Zero hallucination).</li>
              <li><strong>Policy Simulator:</strong> Scikit-learn regression models calibrated on DoLR acquisition delay data.</li>
            </ul>
          </div>
        </div>

        <div className="modal-footer manual-footer">
          <button className="btn-manual-download" onClick={() => alert('Downloading BhumiNexus_SIH26019_Executive_Summary.pdf')}>
            <Download size={16} />
            <span>Download Evaluator PDF (SIH26019)</span>
          </button>
          <button className="btn-modal-primary" onClick={onClose}>
            <span>Close Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
