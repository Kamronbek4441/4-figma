import React from "react";
import "./Journal.css";

const Journal = () => {
  return (
    <div className="journal">
      <div class="layout-container">
        <div class="image-grid">
          <div class="image-item large">
            <img src="./assets/flower.svg" alt="" />
          </div>
          <div class="image-column">
            <div class="image-item small">
              <img src="./assets/runner.svg" alt="" />
            </div>
            <div class="image-item small">
              <img src="./assets/baking.svg" alt="" />
            </div>
          </div>
          <div class="image-item wide">
            <img src="./assets/man.svg" alt="" />
          </div>
        </div>

        <div class="text-section">
          <h1 class="headline">Engage and Excel</h1>
          <p class="subtext">Empower every student’s learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
