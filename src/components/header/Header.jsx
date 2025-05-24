import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div class="logo">⚡ TechInnov</div>
        <nav>
          <a href="#">Begin</a>
          <a href="#">Perspective</a>
          <a href="#">Inventors</a>
          <button class="proceed">Proceed</button>
          <button class="register">Register Today</button>
        </nav>
      </header>
    </div>
  );
}

export default Header
