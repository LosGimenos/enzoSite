import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <ul id="nav-bar-links">
        <li>

            <p>About</p>

        </li>
        <li>

            <p>Web</p>

        </li>
        <li>
          <a href="https://losgimenos.github.io/enzoThinks/" target="_blank">
            <p>Blog</p>
          </a>
        </li>
        </ul>

            <div className="chalchi">
              <h3>Lorenzo Sari&ntilde;ana</h3>
            </div>

    </div>
  );
}

export default NavBar;
