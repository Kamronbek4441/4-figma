import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div>
      <section class="hero">
        <img src="./assets/bacground.svg" alt="Background" class="hero-bg" />
        <div class="overlay">
          <h1>
            Sparking Your App <br /> Ideas
          </h1>
          <p>Creating digital journeys passionately</p>
          <div class="buttons">
            <a href="#" class="btn primary">
              Start Your App Journey 🚀
            </a>
            <a href="#" class="btn secondary">
              Know More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main
