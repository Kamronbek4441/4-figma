import React from 'react'
import "./Process.css"

const Process = () => {
  return (
    <div className="process">
      <div class="section-wrapper">
        <div class="text-content">
          <h1>Elevate Education</h1>
          <p>Harness the power of digital assessments.</p>
          <button class="join-button">Join Our Community</button>
        </div>

        <div class="benefit-card">
          <div class="benefit-item">
            <span class="benefit-icon">📷</span>
            <div>
              <h3>Effortless Setup</h3>
              <p>Get up and running with no downtime.</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <div>
              <h3>Actionable Data</h3>
              <p>Utilize insights to support student growth.</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">☁️</span>
            <div>
              <h3>Scalable Solutions</h3>
              <p>Adapt and scale to meet institutional needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process
