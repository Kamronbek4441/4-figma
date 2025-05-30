import React from "react";
import "./Collection.css";

const Collection = () => {
  return (
    <div>
      <section class="creations-section">
        <h2>Chosen Creations</h2>
        <p class="subtitle">Polished for Precision</p>
        <div class="creations-grid">
          <div class="creation-card">
            <img src="./assets/lummi.svg" alt="User-Focused Design" />
            <p>User-Focused Design</p>
          </div>
          <div class="creation-card">
            <img src="./assets/navigation.svg" alt="Effortless Navigation" />
            <p>Effortless Navigation</p>
          </div>
          <div class="creation-card">
            <img src="./assets/layouts.svg" alt="Adaptable Layouts" />
            <p>Adaptable Layouts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
