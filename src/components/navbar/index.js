import React, { Component } from 'react';
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { IoFolderOpenSharp, IoHome } from "react-icons/io5";
import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer";
import { SiLinkedin, SiGithub } from "react-icons/si";
import LogoImg from '../../images/teddy-bear.png';
import '../../styles/navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="navbar-container">
          <div className="logoContainer">
            <img className="logo" src={LogoImg} alt="logo" />
          </div>
          <ul className="navmenu">
            <nav className="nav-item nav-item__home">
              <IoHome />
            </nav>
            <nav className="nav-item nav-item__about">
              <FaUserAstronaut />
            </nav>
            <nav className="nav-item nav-item__skills">
              <GiGearHammer />
            </nav>
            <nav className="nav-item nav-item__projects">
              <IoFolderOpenSharp />
            </nav>
          </ul>
          <div className="linksmenu">
            <div className="link-item link-item__linkedin">
              <SiLinkedin />
            </div>
            <div className="link-item link-item__github">
              <SiGithub />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
