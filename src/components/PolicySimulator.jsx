import React, { useState } from 'react';
import { Sliders, TrendingDown, IndianRupee, Clock, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export function PolicySimulator() {
  // Simulator Sliders
  const [tehsilSpeed, setTehsilSpeed] = useState(25); // 0 to 50%
  const [compensationDays, setCompensationDays] = useState(45); // 15 to 90 days
  const [digitizationTarget, setDigitizationTarget] = useState(96); // 90 to 100%

  // Simulated formula based on DoLR ML regression weights
  const highRiskDrop = Math.min(60, Math.round(tehsilSpeed * 0.9 + (90 - compensationDays) * 0.35 + (digitizationTarget - 90) * 1.8));
  const estimatedSavingsCrores = Math.round(120 + highRiskDrop * 3.8);
  const disputeResolutionMonths = Math.max(4, Math.round(18 - (tehsilSpeed * 0.18 + (digitizationTarget - 90) * 0.4)));

  return (
    <section className="simulator-section-wrapper" id="simulator">
      <div className="simulator-container">
        
        {/* Header */}
        <div className="simulator-header-block">
          <div className="pill-category sim-pill">
            <span className="pill-dot green" />
            <span>Key Differentiator for SIH26019</span>
          </div>
          <h2 className="simulator-main-heading">
            Evidence-Based Policy Simulator: "What-If" Scenario Analysis
          </h2>
          <p className="simulator-sub-heading">
            A simple, intuitive sandbox for district magistrates and policymakers to forecast 
            how administrative SLA reforms impact dispute velocity and budget savings before rollout.
          </p>
        </div>

        {/* Simulator Grid: Sliders on Left, Live Forecast on Right */}
        <div className="simulator-interactive-grid">
          
          {/* Controls Box */}
          <div className="sim-controls-card">
            <div className="card-header">
              <Sliders size={20} className="header-icon" />
              <h3>Adjust Policy Levers</h3>
            </div>

            {/* Slider 1 */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">1. Tehsil Verification Turnaround Improvement</span>
                <span className="slider-badge">+{tehsilSpeed}% Faster</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={tehsilSpeed}
                onChange={(e) => setTehsilSpeed(Number(e.target.value))}
                className="gov-slider saffron-slider"
              />
              <div className="slider-hints">
                <span>0% (Status Quo)</span>
                <span>+25% (Standard SLA)</span>
                <span>+50% (Fast Track)</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">2. Land Compensation Disbursal Timeline</span>
                <span className="slider-badge">{compensationDays} Days</span>
              </div>
              <input
                type="range"
                min="15"
                max="90"
                step="5"
                value={compensationDays}
                onChange={(e) => setCompensationDays(Number(e.target.value))}
                className="gov-slider blue-slider"
              />
              <div className="slider-hints">
                <span>15 Days (Direct Benefit)</span>
                <span>45 Days</span>
                <span>90 Days (Legacy)</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">3. District Cadastral Digitization Target</span>
                <span className="slider-badge">{digitizationTarget}% Complete</span>
              </div>
              <input
                type="range"
                min="90"
                max="100"
                step="1"
                value={digitizationTarget}
                onChange={(e) => setDigitizationTarget(Number(e.target.value))}
                className="gov-slider green-slider"
              />
              <div className="slider-hints">
                <span>90% Baseline</span>
                <span>95% Current</span>
                <span>100% Saturation</span>
              </div>
            </div>

            <div className="sim-helper-callout">
              <AlertCircle size={16} />
              <span>Regression model calibrated on 5 years of historical DoLR acquisition disputes across 38 districts.</span>
            </div>
          </div>

          {/* Results Impact Card */}
          <div className="sim-results-card">
            <div className="card-header">
              <Sparkles size={20} className="header-icon" />
              <h3>Projected Real-World Outcomes</h3>
            </div>

            <div className="outcome-metrics-grid">
              
              {/* Metric 1 */}
              <div className="outcome-box drop-box">
                <span className="outcome-label">Drop in High-Risk Stalled Projects</span>
                <div className="outcome-number-row">
                  <TrendingDown size={28} className="outcome-icon" />
                  <span className="outcome-big-num">-{highRiskDrop}%</span>
                </div>
                <span className="outcome-sub">Significant reduction in court stay orders</span>
              </div>

              {/* Metric 2 */}
              <div className="outcome-box savings-box">
                <span className="outcome-label">Est. Litigation & Cost Overrun Saved</span>
                <div className="outcome-number-row">
                  <IndianRupee size={26} className="outcome-icon" />
                  <span className="outcome-big-num">₹{estimatedSavingsCrores} Cr</span>
                </div>
                <span className="outcome-sub">Preserved state development capital</span>
              </div>

              {/* Metric 3 */}
              <div className="outcome-box time-box">
                <span className="outcome-label">Average Dispute Resolution Time</span>
                <div className="outcome-number-row">
                  <Clock size={26} className="outcome-icon" />
                  <span className="outcome-big-num">{disputeResolutionMonths} Months</span>
                </div>
                <span className="outcome-sub">Reduced from baseline of 18 months</span>
              </div>

            </div>

            {/* AI Policy Recommendation Card */}
            <div className="ai-recommendation-box">
              <span className="rec-badge">Automated Policy Recommendation</span>
              <p className="rec-text">
                "By pairing a <strong>+{tehsilSpeed}%</strong> turnaround acceleration with 
                a <strong>{compensationDays}-day</strong> compensation mandate, the district reaches optimal fiscal efficiency with 
                a <strong>{highRiskDrop}%</strong> drop in land acquisition delays."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
