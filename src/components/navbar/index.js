import React, { Component } from 'react';
// import { FaUserAstronaut } from 'react-icons/fa'
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut"
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
              <FaUserAstronaut className="rotate" />
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
