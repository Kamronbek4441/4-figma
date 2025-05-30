import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="testimonial-section">
        <h2>Client Acclamation</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <img src="./assets/jamie.svg" alt="" />
            <div class="testimonial-content">
              <p class="quote">
                “A revolutionary design mindset that flawlessly matches our
                brand’s mission.”
              </p>
              <p class="name">
                Jamie Smith, <span class="titlee">Tech Chief</span>
              </p>
            </div>
          </div>

          <div class="testimonial-card">
            <img src="./assets/alexa.svg" alt="" />
            <div class="testimonial-content">
              <p class="quote">
                “Remarkable focus on specifics and a delight to work together on
                our venture.”
              </p>
              <p class="name">
                Alexa Jones, <span class="titlee">Venture Originator</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
