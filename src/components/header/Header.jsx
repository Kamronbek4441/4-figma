import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header class="navbar">
        <div class="logo">⚡ DesignCraftsmanship</div>
        <nav class="nav-links">
          <a href="#">Work Showcase</a>
          <a href="#">Beliefs</a>
          <a href="#">Joint Ventures</a>
        </nav>
        <div class="nav-buttons">
          <button class="btn begin">Begin</button>
          <button class="btn kickoff">Kickoff</button>
        </div>
      </header>
    </div>
  );
}

export default Header
