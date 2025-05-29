import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="integration-section">
        <div class="integration-container">
          <h3 class="integration-heading">Simple Integration</h3>
          <div class="integration-cards">
            <div class="integration-card">
              <div class="circle">1</div>
              <h4>Digitize Assessments</h4>
              <p>
                Easily convert paper tests into interactive digital formats.
              </p>
            </div>
            <div class="integration-card">
              <div class="circle">2</div>
              <h4>Real-Time Insights</h4>
              <p>Instantly analyze and understand student performance.</p>
            </div>
            <div class="integration-card">
              <div class="circle">3</div>
              <h4>Comprehensive Reports</h4>
              <p>Detailed breakdowns to guide student success strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
