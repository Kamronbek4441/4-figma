import React from "react";
import "./Rest.css";

const Rest = () => {
  return (
    <div>
      <main class="layout-container">
        <section class="phone-preview">
          <img src="./assets/iphone.svg" alt="App UI" class="phone-image" />
        </section>
        <section class="text-content">
          <h1 class="headline">
            Begin Your <br /> Expedition
          </h1>
          <p class="description">
            Keen to talk about your design aspirations? Let's engage and craft
            together.
          </p>
          <div class="download-buttons">
            <a href="#" class="store-link">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
            <a href="#" class="store-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rest;
