import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div class="navbar">
          <div class="logo">📱 TechAvenue Services</div>
          <nav class="nav-links">
            <a href="#">Greetings From Us</a>
            <a href="#">Our Service Adventure</a>
            <a href="#">Meet Our Service Team</a>
          </nav>
          <button class="top-btn">Dive Into Our Services</button>
        </div>
      </header>
    </div>
  );
}

export default Header
