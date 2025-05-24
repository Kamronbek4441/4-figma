import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div>
      <main>
        <section class="left">
          <h1>
            Transforming
            <br />
            Technology
          </h1>
          <p>Pioneer with us today.</p>
          <button class="learn-more">Learn More</button>
        </section>
        <section class="right">
          <img src="./assets/face.jpg" alt="Tech Face" />
        </section>
      </main>
    </div>
  );
}

export default Main
