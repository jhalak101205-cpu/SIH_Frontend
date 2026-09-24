import React, { useState } from 'react';
import { X, Lock, Shield, Smartphone, KeyRound, CheckCircle2 } from 'lucide-react';
import { NationalEmblem } from './Emblem';

export function SignInModal({ isOpen, onClose, onSuccessfulLogin }) {
  const [activeTab, setActiveTab] = useState('parichay'); // 'parichay' or 'mobile'
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('tahsildar');
  const [isOtpSent, setIsOtpSent] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    onSuccessfulLogin(role);
    onClose();
  };

  return (
    <div className="feature-modal-backdrop" onClick={onClose}>
      <div className="signin-modal-window animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="signin-header">
          <div className="signin-brand">
            <NationalEmblem size={38} className="emblem-gold" />
            <div>
              <h3>MeriPehchan / Jan Parichay</h3>
              <p>National Single Sign-On (NSSO) · Government of India</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close Sign In">
            <X size={18} />
          </button>
        </div>

        {/* Tab selection */}
        <div className="signin-tabs">
          <button 
            className={`signin-tab ${activeTab === 'parichay' ? 'active' : ''}`}
            onClick={() => setActiveTab('parichay')}
          >
            Officer ID & Password
          </button>
          <button 
            className={`signin-tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            Aadhaar / Mobile OTP
          </button>
        </div>

        <form onSubmit={handleLogin} className="signin-form">
          {activeTab === 'parichay' ? (
            <>
              <div className="form-group">
                <label>Official Parichay Username / Gov Email</label>
                <input 
                  type="text" 
                  placeholder="e.g. officer.revenue@tn.gov.in"
                  defaultValue="tahsildar.cbe@tn.gov.in"
                  required
                />
              </div>

              <div className="form-group">
                <label>Passphrase / Security PIN</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  defaultValue="GovSecurity2026!"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Registered Mobile Number / Aadhaar Virtual ID</label>
                <div className="mobile-input-row">
                  <input 
                    type="tel" 
                    placeholder="9876543210"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="btn-send-otp"
                    onClick={() => setIsOtpSent(true)}
                  >
                    {isOtpSent ? 'Resend OTP' : 'Send OTP'}
                  </button>
                </div>
              </div>

              {isOtpSent && (
                <div className="form-group animate-fade-in">
                  <label>Enter 6-Digit OTP</label>
                  <input 
                    type="text" 
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          <div className="form-group">
            <label>Select Authorized Role (Simulation)</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="role-select"
            >
              <option value="tahsildar">Revenue Tahsildar (Cadastral Resurvey Level 3)</option>
              <option value="dtcp_planner">DTCP Town Planner (Master Plan 2035 Zoning)</option>
              <option value="forest_officer">Forest Range Officer (Buffer Conservation)</option>
              <option value="district_collector">District Collector (Full Executive Clearance)</option>
            </select>
          </div>

          <div className="security-notice">
            <Shield size={14} className="notice-icon" />
            <span>Secured via GIGW AA Cryptographic Token · MeghRaj NIC Gateway</span>
          </div>

          <button type="submit" className="btn-submit-signin">
            <Lock size={15} />
            <span>Authenticate & Launch Workspace</span>
          </button>
        </form>

      </div>
    </div>
  );
}
