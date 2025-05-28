import React from "react";
import "./Rest.css";

const Rest = () => {
  return (
    <div>
      <section class="ingenious-services">
        <div class="service-grid">
          <div class="service-image">
            <img src="./assets/lummi.svg" alt="" />
          </div>
          <div class="service-text">
            <h2>Ingenious Services</h2>
            <p>Check out our latest projects demonstrating our expertise.</p>

            <div class="team-grid">
              <div class="team-member">
                <img src="./assets/lummiavatar.svg" alt="" />
                <div>
                  <strong>Alex Johnson</strong>
                  <br />
                  Lead Flutter Developer
                </div>
              </div>
              <div class="team-member">
                <img src="./assets/avatar.svg" alt="" />
                <div>
                  <strong>Samantha Lee</strong>
                  <br />
                  UI/UX Guru
                </div>
              </div>
              <div class="team-member">
                <img src="./assets/lummiavatar.svg" alt="" />
                <div>
                  <strong>Michael Brown</strong>
                  <br />
                  Digital Marketing Whiz
                </div>
              </div>
              <div class="team-member">
                <img src="./assets/avatar.svg" alt="" />
                <div>
                  <strong>Emily Thompson</strong>
                  <br />
                  Web Development Lead
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testmonal-section">
          <div class="testimonial-section">
            <div class="testimonial">
              <img src="./assets/lummiavatar.svg" alt="" />
              <p>
                TechAvenue's team is unmatched. They surpassed our expectations
                and were great to work with. <br />
                <span>Chris Parker, CEO</span>
              </p>
            </div>
          </div>
          <div className="testimonal-section">
            <div class="testimonial1">
              <img src="./assets/avatar.svg" alt="" />
              <p>
                Their meticulousness and innovative strategy have dramatically
                enhanced our business. <br />
                <span>Ava Davis, CMO</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rest;
