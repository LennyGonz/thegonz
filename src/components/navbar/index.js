import React, { Component } from 'react';
import '../../styles/navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <li className="logo">
            <a>

            </a>
          </li>

          <li className="nav-item">
            <a>
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a>
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a>
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a>
              PROJECTS
            </a>
          </li>
        </nav>
      </div>
    )
  }
}

export default NavBar;
