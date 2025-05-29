import React from "react";
import "./Rest.css";

const Rest = () => {
  return (
    <div>
      <div class="wrapper">
        <header class="dashboard-header">
          <h1 class="title">Interactive Dashboard</h1>
          <p class="subtitle">A centralized system for all assessment data.</p>
        </header>

        <div class="card-grid">
          <div class="info-card">
            <img src="./assets/frindly.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">User-Friendly Design</h3>
              <p class="card-text">
                Intuitive interface for efficient assessment.
              </p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/feedback.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Instant Feedback</h3>
              <p class="card-text">Provide immediate evaluation to students.</p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/analysis.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Strategic Analysis</h3>
              <p class="card-text">
                Identify trends and make informed decisions.
              </p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/tools.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Collaborative Tools</h3>
              <p class="card-text">Foster a community of sharing and growth.</p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/data.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Secure Data</h3>
              <p class="card-text">
                Reliable and safe storage of all assessment records.
              </p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/features.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Accessibility Features</h3>
              <p class="card-text">
                Ensure assessments are fair and inclusive.
              </p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/grading.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Grading Automation</h3>
              <p class="card-text">
                Save time with automatic scoring capabilities.
              </p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/tracking.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Progress Tracking</h3>
              <p class="card-text">Monitor student achievements over time.</p>
            </div>
          </div>

          <div class="info-card">
            <img src="./assets/multi.svg" alt="" className="card-image" />
            <div class="card-body">
              <h3 class="card-title">Multi-Level Views</h3>
              <p class="card-text">
                Analyze scores by class, grade, or school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
