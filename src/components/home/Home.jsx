import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="services">
        <h2>Our Service Methodology</h2>
        <p class="subtext">
          Uncover our systematic approach to turning your dreams into reality.
        </p>

        <div class="service-steps">
          <div class="step">
            <img src="./assets/evaluation.png" alt="Service Evaluation" />
            <h4>Step 1</h4>
            <h3>Service Evaluation</h3>
            <p>
              Your ideas are valuable to us, we discuss potential strategies and
              anticipated results.
            </p>
          </div>
          <div class="step">
            <img src="./assets/bacground.svg" alt="Design and Execute" />
            <h4>Step 2</h4>
            <h3>Design & Execute</h3>
            <p>
              Our experts craft the concept and execute the solution, keeping
              you fully informed.
            </p>
          </div>
          <div class="step">
            <img src="./assets/evaluation.png" alt="Service Assurance" />
            <h4>Step 3</h4>
            <h3>Service Assurance</h3>
            <p>Strict testing guarantees top-notch quality and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
