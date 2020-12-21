import React from 'react';
import { FaUserAstronaut } from "@react-icons/all-files/fa/FaUserAstronaut";
import { IoFolderOpenSharp, IoHome } from "react-icons/io5";
import { GiGearHammer } from "@react-icons/all-files/gi/GiGearHammer";
import { SiLinkedin } from "react-icons/si";
import '../../styles/mobileNav.scss';


const MobileNav = () => {
  const toggle = () => {
    let x = document.getElementByClassName("nav-mobile")
    
  }
  return (
    <>
      <nav className="nav-mobile">
        <ul className="navmenu-mobile">
          <li className="nav-item-mobile nav-item-mobile__home">
            <IoHome />
          </li>
          <li className="nav-item-mobile nav-item-mobile__about">
            <FaUserAstronaut />
          </li>
          <li className="nav-item-mobile nav-item-mobile__skills">
            <GiGearHammer />
          </li>
          <li className="nav-item-mobile nav-item-mobile__projects">
            <IoFolderOpenSharp />
          </li>
          <li className="nav-item-mobile nav-item-mobile__linkedin">
            <SiLinkedin />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav;
