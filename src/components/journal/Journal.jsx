import React from 'react'
import "./Journal.css"

const Journal = () => {
  return (
    <div className="journal">
      <h1>Meet the Pioners</h1>
      <p>The intellects behind the advencements.</p>
      <div className="jour">
        <div className="j">
          <img src="./assets/Max.png" alt="" />
          <p className='cls'>Max Henderson</p>
          <p>Founder & CEO</p>
        </div>
        <div className="j">
          <img src="./assets/James.png" alt="" />
          <p className='cls'>James Carter</p>
          <p>Chief Engineer</p>
        </div>
        <div className="j">
          <img src="./assets/Sara.png" alt="" />
          <p className='cls'>Sara Tucker</p>
          <p>Design Director</p>
        </div>
        <div className="j">
          <img src="./assets/David.png" alt="" />
          <p className='cls'>David Black</p>
          <p>Marketing Guru</p>
        </div>
      </div>
    </div>
  );
}

export default Journal
