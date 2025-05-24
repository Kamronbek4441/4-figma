import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="cards-container">
        <div class="card large">
          <img src="./assets/vr.png" alt="Effortless Merging with VR" />
          <div class="text">
            <h2>Effortless Merging</h2>
            <p>Consolidate your digital journey.</p>
          </div>
        </div>
        <div class="bottom-cards">
          <div class="card small">
            <img src="./assets/miyya.png" alt="Solid Protection with brain chip" />
            <div class="text small-text">
              <h3>Solid Protection</h3>
              <p>Safeguarding your data authenticity.</p>
            </div>
          </div>
          <div class="card small">
            <img
              src="./assets/qo'l.png"
              alt="User-Focused Layout on touch interface"
            />
            <div class="text">
              <h3>User-Focused Layout</h3>
              <p>Weaving easy-to-use user platforms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
