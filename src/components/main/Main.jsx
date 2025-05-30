import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div>
      <main class="hero-section">
        <img
          src="35645fd8-7e12-45e9-a284-0b9aa636a01c.png"
          alt=""
          class="hero-img"
        />
        <div class="overlay-card">
          <h1>Boost Your Interface</h1>
          <p>Embodying Simplicity</p>
          <div class="buttons">
            <button class="btn inspect">Inspect Projects</button>
            <button class="btn discover">Discover More</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main
