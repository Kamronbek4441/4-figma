import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header class="navbar">
        <div class="logo">📋 Digital Assessor</div>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="btn-outline">
          Get Started Now
        </a>
      </header>
    </div>
  );
}

export default Header
